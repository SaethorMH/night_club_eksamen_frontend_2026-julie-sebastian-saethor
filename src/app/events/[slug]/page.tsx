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
    <>
      <TitleCard title={event.title} />
      <EventDetailsSection event={event} />
      <CommentsSection id={event.id} />
      <CommentsForm />
    </>
  );
};

export default EventDetails;
