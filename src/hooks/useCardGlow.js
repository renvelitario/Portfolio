import { useEffect } from "react";

export function useCardGlow({ paused = false } = {}) {
  useEffect(() => {
    const pointer = { x: -9999, y: -9999 };
    let frame = 0;

    function updateCards() {
      frame = 0;

      document.querySelectorAll(".card").forEach((card) => {
        if (paused) {
          card.style.setProperty("--glow-opacity", "0");
          return;
        }

        const rect = card.getBoundingClientRect();
        const localX = pointer.x - rect.left;
        const localY = pointer.y - rect.top;
        const distanceX = Math.max(Math.abs(localX - rect.width / 2) - rect.width / 2, 0);
        const distanceY = Math.max(Math.abs(localY - rect.height / 2) - rect.height / 2, 0);
        const distance = Math.hypot(distanceX, distanceY);
        const proximity = Math.max(0, 1 - distance / 220);

        card.style.setProperty("--glow-opacity", (proximity * 0.78).toFixed(2));
        card.style.setProperty("--glow-size", `${190 + proximity * 150}px`);
        card.style.setProperty("--pointer-x", `${localX}px`);
        card.style.setProperty("--pointer-y", `${localY}px`);
      });
    }

    function scheduleUpdate() {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateCards);
    }

    function setPointerFromEvent(event) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      scheduleUpdate();
    }

    function handleScroll() {
      scheduleUpdate();
    }

    document.addEventListener("pointermove", setPointerFromEvent);
    window.addEventListener("wheel", setPointerFromEvent, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", setPointerFromEvent);
      window.removeEventListener("wheel", setPointerFromEvent);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [paused]);
}
