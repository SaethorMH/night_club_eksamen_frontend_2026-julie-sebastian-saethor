import { getTestimonials } from "@/app/actions/actions";
import SectionTitle from "../global/SectionTitle";

import TestimonialCard from "./TestimonialCard";

import { Asset } from "@/app/events/page";
import CarouselDots from "./CarouselDots";
export interface Testimonial {
  id: number;
  name: string;
  content: string;
  asset: Asset;
  facebook: string;
  twitter: string;
}

const Section6 = async () => {
  const testimonials: Testimonial[] = await getTestimonials();
  return (
    <section className="h-screen">
      <SectionTitle title="Testimonials" />
      <div className="flex m-auto h-[60%] w-6xl snap-x snap-mandatory scroll-smooth scrollbar-none overflow-x-auto">
        {testimonials.map((test) => (
          <TestimonialCard key={test.id} t={test} />
        ))}
      </div>
      <CarouselDots ids={testimonials.map((t) => t.id)} />{" "}
    </section>
  );
};

export default Section6;
