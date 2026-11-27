import EventDetailsSection from "./_components/EventDetailsSection";
import CommentsSection from "./_components/CommentsSection";
import { getOneEvent } from "@/app/actions/actions";
import { Event } from "../page";
import TitleCard from "@/app/components/global/TitleCard";
import CommentsForm from "./_components/CommentsForm";

type Props = {
  params: Promise<{ slug: string }>;
};

const EventDetails = async ({ params }: Props) => {
  const { slug } = await params;

  const event: Event = await getOneEvent(slug ?? "neon-nights-grand-opening");
  await new Promise((r) => setTimeout(r, 1000));

  return (
    <section className="grid grid-cols-subgrid col-[full] bg-fixed bg-cover bg-[url(/assets/background_images/pattern_bg.jpg)]">
      <TitleCard title={event.title} />
      <EventDetailsSection event={event} />
      <CommentsSection id={event.id} />
      <CommentsForm id={event.id} />
    </section>
  );
};

export default EventDetails;
