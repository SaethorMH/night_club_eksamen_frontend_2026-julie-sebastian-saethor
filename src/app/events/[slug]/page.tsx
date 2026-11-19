import EventDetailsSection from "./_components/EventDetailsSection";
import CommentsSection from "./_components/CommentsSection";
import { getOneEvent } from "@/app/actions/actions";
import { Event } from "../page";
import TitleCard from "@/app/components/TitleCard";

type Props = {
  params: Promise<{ slug: string }>;
};

const EventDetails = async ({ params }: Props) => {
  const { slug } = await params;

  const event: Event = await getOneEvent(slug ?? "neon-nights-grand-opening");

  return (
    <>
      <TitleCard title={event.title} />
      <EventDetailsSection />
      <CommentsSection />
    </>
  );
};

export default EventDetails;
