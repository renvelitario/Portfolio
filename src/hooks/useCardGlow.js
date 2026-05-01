import { useEffect } from "react";

export function useCardGlow() {
  useEffect(() => {
    const pointer = { x: -9999, y: -9999 };
    const root = document.documentElement;
    let frame = 0;

    function updateCards() {
      frame = 0;

      document.querySelectorAll(".card").forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = Math.max(Math.abs(pointer.x - centerX) - rect.width / 2, 0);
        const distanceY = Math.max(Math.abs(pointer.y - centerY) - rect.height / 2, 0);
        const distance = Math.hypot(distanceX, distanceY);
        const proximity = Math.max(0, 1 - distance / 260);

        card.style.setProperty("--glow-opacity", (proximity * 0.95).toFixed(2));
        card.style.setProperty("--glow-size", `${280 + proximity * 220}px`);
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
      root.style.setProperty("--pointer-x", `${pointer.x}px`);
      root.style.setProperty("--pointer-y", `${pointer.y}px`);
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
  }, []);
}
