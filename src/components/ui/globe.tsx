import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

type Rgb = [number, number, number];

const markerLocation = [14.1709, 121.2437] as [number, number];

function getMarkers(isLight: boolean) {
  const colors = isLight
    ? [
        [0.03, 0.25, 0.34],
        [0.04, 0.55, 0.8],
        [0.74, 0.96, 1],
      ]
    : [
        [0.02, 0.24, 0.12],
        [0.08, 0.75, 0.36],
        [0.72, 1, 0.82],
      ];

  return [
    {
      location: markerLocation,
      size: 0.03,
      color: colors[0] as Rgb,
    },
    {
      location: markerLocation,
      size: 0.018,
      color: colors[1] as Rgb,
    },
    {
      location: markerLocation,
      size: 0.008,
      color: colors[2] as Rgb,
    },
  ];
}

function getGlobeTheme(isLight: boolean) {
  return isLight
    ? {
        dark: 0,
        diffuse: 1.55,
        mapBrightness: 2.2,
        baseColor: [0.78, 0.9, 0.96] as Rgb,
        markerColor: [0.02, 0.4, 0.62] as Rgb,
        glowColor: [0.88, 0.97, 1] as Rgb,
        arcColor: [0.08, 0.5, 0.72] as Rgb,
      }
    : {
        dark: 1,
        diffuse: 1.2,
        mapBrightness: 7,
        baseColor: [0.14, 0.14, 0.14] as Rgb,
        markerColor: [1, 1, 1] as Rgb,
        glowColor: [0.85, 0.85, 0.85] as Rgb,
        arcColor: [0.92, 0.92, 0.92] as Rgb,
      };
}

export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLight, setIsLight] = useState(
    () => typeof document !== "undefined" && document.body.classList.contains("light-mode")
  );
  const isLightRef = useRef(isLight);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.body.classList.contains("light-mode"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    isLightRef.current = isLight;
  }, [isLight]);

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
        const theme = getGlobeTheme(isLightRef.current);

        globe = createGlobe(canvas, {
          devicePixelRatio: pixelRatio,
          width: size,
          height: size,
          phi: autoPhi + dragPhi,
          theta: -0.35,
          dark: theme.dark,
          diffuse: theme.diffuse,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: theme.mapBrightness,
          baseColor: theme.baseColor,
          markerColor: theme.markerColor,
          glowColor: theme.glowColor,
          arcColor: theme.arcColor,
          arcWidth: 0.8,
          arcHeight: 0.28,
          markerElevation: 0.005,
          markers: getMarkers(isLightRef.current),
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
      const theme = getGlobeTheme(isLightRef.current);
      const markers = getMarkers(isLightRef.current);

      globe?.update({
        dark: theme.dark,
        diffuse: theme.diffuse,
        mapBrightness: theme.mapBrightness,
        baseColor: theme.baseColor,
        markerColor: theme.markerColor,
        glowColor: theme.glowColor,
        arcColor: theme.arcColor,
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
