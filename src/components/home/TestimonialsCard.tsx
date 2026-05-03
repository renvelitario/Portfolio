import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from "react";
import { testimonials } from "../../data/content.js";
import Card from "../ui/Card.tsx";
import CardTitle from "../ui/CardTitle.tsx";

export default function TestimonialsCard() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const resetTimerRef = useRef<number | undefined>(undefined);
  const currentTrackIndexRef = useRef(testimonials.length > 1 ? 1 : 0);
  const isPausedRef = useRef(false);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const hasLoop = testimonials.length > 1;
  const carouselItems = hasLoop
    ? [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]]
    : testimonials;

  function getRealIndex(trackIndex: number) {
    if (!hasLoop) return trackIndex;
    if (trackIndex === 0) return testimonials.length - 1;
    if (trackIndex === testimonials.length + 1) return 0;
    return trackIndex - 1;
  }

  function updateActiveIndex(trackIndex: number) {
    setActiveTestimonial(getRealIndex(trackIndex));
  }

  function scrollToTrackIndex(trackIndex: number, behavior: ScrollBehavior = "smooth") {
    const carousel = carouselRef.current;
    if (!carousel) return;

    window.clearTimeout(resetTimerRef.current);
    currentTrackIndexRef.current = trackIndex;
    carousel.scrollTo({ left: carousel.clientWidth * trackIndex, behavior });
    updateActiveIndex(trackIndex);

    if (!hasLoop || behavior !== "smooth") return;

    resetTimerRef.current = window.setTimeout(() => {
      const activeIndex = currentTrackIndexRef.current;

      if (activeIndex === 0) {
        currentTrackIndexRef.current = testimonials.length;
        carousel.style.scrollBehavior = "auto";
        carousel.scrollLeft = carousel.clientWidth * testimonials.length;
        carousel.style.scrollBehavior = "";
      }

      if (activeIndex === testimonials.length + 1) {
        currentTrackIndexRef.current = 1;
        carousel.style.scrollBehavior = "auto";
        carousel.scrollLeft = carousel.clientWidth;
        carousel.style.scrollBehavior = "";
      }
    }, 420);
  }

  function goToNext() {
    const nextIndex = Math.min(currentTrackIndexRef.current + 1, testimonials.length + 1);
    scrollToTrackIndex(nextIndex);
  }

  function goToPrevious() {
    const previousIndex = Math.max(currentTrackIndexRef.current - 1, 0);
    scrollToTrackIndex(previousIndex);
  }

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    scrollToTrackIndex(currentTrackIndexRef.current, "auto");

    function handleResize() {
      scrollToTrackIndex(currentTrackIndexRef.current, "auto");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(resetTimerRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !hasLoop) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (dragRef.current.isDragging || isPausedRef.current) return;

      goToNext();
    }, 3600);

    return () => window.clearInterval(interval);
  }, [hasLoop]);

  function scrollToTestimonial(index: number) {
    scrollToTrackIndex(hasLoop ? index + 1 : index);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    dragRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft
    };
    carousel.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;
    if (!carousel || !dragRef.current.isDragging) return;

    const delta = event.clientX - dragRef.current.startX;
    carousel.scrollLeft = dragRef.current.scrollLeft - delta;
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;
    dragRef.current.isDragging = false;

    if (!carousel) return;

    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }

    const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
    const clampedIndex = Math.max(0, Math.min(carouselItems.length - 1, nextIndex));
    scrollToTrackIndex(clampedIndex);
  }

  function pauseAutoplay() {
    isPausedRef.current = true;
  }

  function resumeAutoplay() {
    isPausedRef.current = false;
  }

  return (
    <Card className="testimonials-card">
      <CardTitle icon="quote">Testimonials</CardTitle>
      <div className="testimonial-carousel" onPointerEnter={pauseAutoplay} onPointerLeave={resumeAutoplay}>
        <div
          className="testimonials"
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {carouselItems.map((item, index) => (
            <figure className="testimonial" key={`${item.name}-${item.role}-${index}`}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        {hasLoop ? (
          <div className="testimonial-hit-areas">
            <button
              className="testimonial-hit-area testimonial-hit-area-prev"
              type="button"
              tabIndex={-1}
              aria-label="Previous testimonial"
              onClick={goToPrevious}
            />
            <button
              className="testimonial-hit-area testimonial-hit-area-next"
              type="button"
              tabIndex={-1}
              aria-label="Next testimonial"
              onClick={goToNext}
            />
          </div>
        ) : null}
        <div className="testimonial-dots" aria-label="Testimonials">
          {testimonials.map((item, index) => (
            <button
              className={activeTestimonial === index ? "active" : undefined}
              type="button"
              key={`${item.name}-${index}`}
              aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
              aria-current={activeTestimonial === index ? "true" : undefined}
              onClick={() => scrollToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
