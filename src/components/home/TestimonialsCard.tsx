import { useEffect, useRef, useState, type PointerEvent } from "react";
import { testimonials } from "../../data/content.js";
import Card from "../ui/Card.tsx";
import CardTitle from "../ui/CardTitle.tsx";

export default function TestimonialsCard() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!carousel || reduceMotion || testimonials.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (dragRef.current.isDragging) return;

      const nextIndex = (activeTestimonial + 1) % testimonials.length;
      carousel.scrollTo({ left: carousel.clientWidth * nextIndex, behavior: "smooth" });
      setActiveTestimonial(nextIndex);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [activeTestimonial]);

  function scrollToTestimonial(index: number) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({ left: carousel.clientWidth * index, behavior: "smooth" });
    setActiveTestimonial(index);
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
    const clampedIndex = Math.max(0, Math.min(testimonials.length - 1, nextIndex));
    carousel.scrollTo({ left: carousel.clientWidth * clampedIndex, behavior: "smooth" });
    setActiveTestimonial(clampedIndex);
  }

  return (
    <Card className="testimonials-card">
      <CardTitle icon="quote">Testimonials</CardTitle>
      <div className="testimonial-carousel">
        <div
          className="testimonials"
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {testimonials.map((item) => (
            <figure className="testimonial" key={`${item.name}-${item.role}`}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
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
