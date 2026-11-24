// CarouselDots.tsx FULDT LAVET AF AI
"use client";

import { useEffect, useState } from "react";

type Props = {
  ids: number[];
};

const CarouselDots = ({ ids }: Props) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(Number(entry.target.id.replace("testimonial-", "")));
          }
        });
      },
      { threshold: 0.6 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(`testimonial-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  const go = (id: number) => {
    document.getElementById(`testimonial-${id}`)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <nav aria-label="Testimonials" className="mt-4 flex justify-center gap-2">
      {ids.map((id, i) => (
        <button
          key={id}
          type="button"
          onClick={() => go(id)}
          aria-label={`Show testimonial ${i + 1}`}
          aria-current={activeId === id}
          className={`border-2 size-6 ${activeId === id ? "bg-(--pink)" : ""}`}
        />
      ))}
    </nav>
  );
};

export default CarouselDots;
