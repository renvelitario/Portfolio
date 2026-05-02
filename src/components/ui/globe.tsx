import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const markers = [
  {
    location: [14.1709, 121.2437] as [number, number],
    size: 0.03,
    color: [0.02, 0.24, 0.12] as [number, number, number],
  },
  {
    location: [14.1709, 121.2437] as [number, number],
    size: 0.018,
    color: [0.08, 0.75, 0.36] as [number, number, number],
  },
  {
    location: [14.1709, 121.2437] as [number, number],
    size: 0.008,
    color: [0.72, 1, 0.82] as [number, number, number],
  },
];

export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let autoPhi = 0;
    let dragPhi = 0;
    let targetDragPhi = 0;
    let frameId = 0;
    let globe: ReturnType<typeof createGlobe> | undefined;

    const createOrUpdateGlobe = () => {
      const size = Math.min(canvas.offsetWidth, canvas.offsetHeight);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      if (!globe) {
        globe = createGlobe(canvas, {
          devicePixelRatio: pixelRatio,
          width: size,
          height: size,
          phi: autoPhi + dragPhi,
          theta: -0.35,
          dark: 1,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 7,
          baseColor: [0.14, 0.14, 0.14],
          markerColor: [1, 1, 1],
          glowColor: [0.85, 0.85, 0.85],
          arcColor: [0.92, 0.92, 0.92],
          arcWidth: 0.8,
          arcHeight: 0.28,
          markerElevation: 0.005,
          markers,
          arcs: [],
        });
      } else {
        globe.update({ width: size, height: size, devicePixelRatio: pixelRatio });
      }
    };

    createOrUpdateGlobe();

    const observer = new ResizeObserver(createOrUpdateGlobe);
    observer.observe(canvas);

    const handlePointerMove = (event: PointerEvent) => {
      if (event.buttons !== 1) return;

      targetDragPhi += event.movementX * 0.006;
    };

    canvas.addEventListener("pointermove", handlePointerMove);

    const animate = () => {
      autoPhi += 0.0035;
      dragPhi += (targetDragPhi - dragPhi) * 0.14;
      const pulse = (Math.sin(Date.now() * 0.006) + 1) / 2;

      globe?.update({
        phi: autoPhi + dragPhi,
        markers: [
          { ...markers[0], size: 0.024 + pulse * 0.024 },
          { ...markers[1], size: 0.014 + pulse * 0.012 },
          { ...markers[2], size: 0.005 + pulse * 0.005 },
        ],
      });
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      canvas.removeEventListener("pointermove", handlePointerMove);
      globe?.destroy();
    };
  }, []);

  return (
    <div className={`globe-horizon ${className}`.trim()}>
      <canvas ref={canvasRef} className="globe" />
    </div>
  );
}
