"use client"

import { useEffect, useRef } from "react"
import createGlobe, { type COBEOptions } from "cobe"

const ROTATION_SPEED = 0.0024

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ")
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 2.15,
  theta: 0.24,
  dark: 1,
  diffuse: 1.45,
  mapSamples: 26000,
  mapBrightness: 8.2,
  baseColor: [0.12, 0.15, 0.18],
  markerColor: [74 / 255, 222 / 255, 128 / 255],
  glowColor: [0.88, 1, 0.94],
  markers: [{ location: [14.2691, 121.4113], size: 0.095 }],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(config.phi ?? 0)
  const widthRef = useRef(0)

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth || 560
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        phiRef.current += ROTATION_SPEED
        state.phi = phiRef.current
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [config])

  return (
    <div
      className={cn(
        "globe-shell",
        className
      )}
    >
      <canvas
        className={cn(
          "globe-canvas"
        )}
        ref={canvasRef}
      />
    </div>
  )
}
