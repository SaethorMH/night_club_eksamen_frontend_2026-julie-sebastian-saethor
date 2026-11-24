import { getTestemonials } from "@/app/actions/actions";
import SectionTitle from "../global/SectionTitle";
import { Asset } from "@/app/events/page";
import TestimonialCard from "./TestimonialCard";
export interface Testemonial {
  id: number;
  name: string;
  content: string;
  asset: Asset;
  facebook: string;
  twitter: string;
}

const Section6 = async () => {
    const testimonials: Testemonial[] = await getTestemonials();
  return (
    <section>
      <SectionTitle title="Testimonials" />

      <div>{testimonials.map(())}</div>
    </section>
  );
};

export default Section6;
