import { memo, useEffect, useRef } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

const DotField = memo(
  ({
    dotRadius = 1.5,
    dotSpacing = 14,
    cursorRadius = 500,
    cursorForce = 0.1,
    bulgeOnly = true,
    bulgeStrength = 67,
    glowRadius = 160,
    sparkle = false,
    waveAmplitude = 0,
    gradientFrom = "rgba(168, 85, 247, 0.35)",
    gradientTo = "rgba(180, 151, 207, 0.25)",
    glowColor = "#120F17",
    ...rest
  }) => {
    const canvasRef = useRef(null);
    const glowRef = useRef(null);
    const dotsRef = useRef([]);
    const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
    const rafRef = useRef(null);
    const sizeRef = useRef({ w: 0, h: 0, offsetX: 0, offsetY: 0 });
    const glowOpacity = useRef(0);
    const engagement = useRef(0);
    const propsRef = useRef({});
    const rebuildRef = useRef(null);
    const glowIdRef = useRef(`dot-field-glow-${Math.random().toString(36).slice(2, 9)}`);

    propsRef.current = {
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo
    };

    useEffect(() => {
      const canvas = canvasRef.current;
      const glowEl = glowRef.current;

      if (!canvas) {
        return undefined;
      }

      const ctx = canvas.getContext("2d", { alpha: true });
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let resizeTimer;

      function buildDots(w, h) {
        const p = propsRef.current;
        const step = p.dotRadius + p.dotSpacing;
        const cols = Math.floor(w / step);
        const rows = Math.floor(h / step);
        const padX = (w % step) / 2;
        const padY = (h % step) / 2;
        const dots = new Array(rows * cols);
        let index = 0;

        for (let row = 0; row < rows; row += 1) {
          for (let col = 0; col < cols; col += 1) {
            const ax = padX + col * step + step / 2;
            const ay = padY + row * step + step / 2;
            dots[index] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay };
            index += 1;
          }
        }

        dotsRef.current = dots;
      }

      function doResize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;

        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        sizeRef.current = {
          w,
          h,
          offsetX: rect.left,
          offsetY: rect.top
        };

        buildDots(w, h);
      }

      function resize() {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(doResize, 100);
      }

      function updateOffset() {
        const rect = canvas.parentElement.getBoundingClientRect();
        sizeRef.current = {
          ...sizeRef.current,
          offsetX: rect.left,
          offsetY: rect.top
        };
      }

      function onMouseMove(event) {
        const size = sizeRef.current;
        mouseRef.current.x = event.clientX - size.offsetX;
        mouseRef.current.y = event.clientY - size.offsetY;
      }

      function onWheel(event) {
        onMouseMove(event);
      }

      function updateMouseSpeed() {
        const mouse = mouseRef.current;
        const dx = mouse.prevX - mouse.x;
        const dy = mouse.prevY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        mouse.speed += (dist - mouse.speed) * 0.5;

        if (mouse.speed < 0.001) {
          mouse.speed = 0;
        }

        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;
      }

      const speedInterval = window.setInterval(updateMouseSpeed, 20);
      let frameCount = 0;

      function tick() {
        frameCount += 1;

        const dots = dotsRef.current;
        const mouse = mouseRef.current;
        const { w, h } = sizeRef.current;
        const p = propsRef.current;
        const time = frameCount * 0.02;
        const targetEngagement = Math.min(mouse.speed / 5, 1);

        engagement.current += (targetEngagement - engagement.current) * 0.06;

        if (engagement.current < 0.001) {
          engagement.current = 0;
        }

        const eng = engagement.current;
        glowOpacity.current += (eng - glowOpacity.current) * 0.08;

        if (glowEl) {
          glowEl.setAttribute("cx", mouse.x);
          glowEl.setAttribute("cy", mouse.y);
          glowEl.style.opacity = glowOpacity.current;
        }

        ctx.clearRect(0, 0, w, h);

        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, p.gradientFrom);
        grad.addColorStop(1, p.gradientTo);
        ctx.fillStyle = grad;

        const cursorRadiusSquared = p.cursorRadius * p.cursorRadius;
        const rad = p.dotRadius / 2;

        ctx.beginPath();

        dots.forEach((dot, index) => {
          const dx = mouse.x - dot.ax;
          const dy = mouse.y - dot.ay;
          const distSq = dx * dx + dy * dy;

          if (distSq < cursorRadiusSquared && eng > 0.01) {
            const dist = Math.sqrt(distSq);
            const angle = Math.atan2(dy, dx);

            if (p.bulgeOnly) {
              const falloff = 1 - dist / p.cursorRadius;
              const push = falloff * falloff * p.bulgeStrength * eng;
              dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
              dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
            } else {
              const move = (500 / dist) * (mouse.speed * p.cursorForce);
              dot.vx += Math.cos(angle) * -move;
              dot.vy += Math.sin(angle) * -move;
            }
          } else if (p.bulgeOnly) {
            dot.sx += (dot.ax - dot.sx) * 0.1;
            dot.sy += (dot.ay - dot.sy) * 0.1;
          }

          if (!p.bulgeOnly) {
            dot.vx *= 0.9;
            dot.vy *= 0.9;
            dot.x = dot.ax + dot.vx;
            dot.y = dot.ay + dot.vy;
            dot.sx += (dot.x - dot.sx) * 0.1;
            dot.sy += (dot.y - dot.sy) * 0.1;
          }

          let drawX = dot.sx;
          let drawY = dot.sy;

          if (p.waveAmplitude > 0) {
            drawY += Math.sin(dot.ax * 0.03 + time) * p.waveAmplitude;
            drawX += Math.cos(dot.ay * 0.03 + time * 0.7) * p.waveAmplitude * 0.5;
          }

          const sparkleHash = ((index * 2654435761) ^ (frameCount >> 3)) >>> 0;
          const drawRadius = p.sparkle && sparkleHash % 100 < 3 ? rad * 1.8 : rad;

          ctx.moveTo(drawX + drawRadius, drawY);
          ctx.arc(drawX, drawY, drawRadius, 0, TWO_PI);
        });

        ctx.fill();

        rafRef.current = window.requestAnimationFrame(tick);
      }

      doResize();
      window.addEventListener("resize", resize);
      window.addEventListener("scroll", updateOffset, { passive: true });
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("wheel", onWheel, { passive: true });
      rafRef.current = window.requestAnimationFrame(tick);

      rebuildRef.current = () => {
        const { w, h } = sizeRef.current;

        if (w > 0 && h > 0) {
          buildDots(w, h);
        }
      };

      return () => {
        window.cancelAnimationFrame(rafRef.current);
        window.clearInterval(speedInterval);
        window.clearTimeout(resizeTimer);
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", updateOffset);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("wheel", onWheel);
      };
    }, []);

    useEffect(() => {
      rebuildRef.current?.();
    }, [dotRadius, dotSpacing]);

    return (
      <div className="dot-field-container" {...rest}>
        <canvas ref={canvasRef} className="dot-field-canvas" />
        <svg className="dot-field-glow" aria-hidden="true">
          <defs>
            <radialGradient id={glowIdRef.current}>
              <stop offset="0%" stopColor={glowColor} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle
            ref={glowRef}
            cx="-9999"
            cy="-9999"
            r={glowRadius}
            fill={`url(#${glowIdRef.current})`}
            style={{ opacity: 0, willChange: "opacity" }}
          />
        </svg>
      </div>
    );
  }
);

DotField.displayName = "DotField";

export default DotField;
