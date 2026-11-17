import { title } from "process";
import EventCard from "./_components/EventCard";
import { getAllEvents } from "../actions/actions";
export interface Event {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  place: string;
  date: string;
}

const EventsPage = async () => {
  const events: Event[] = await getAllEvents();
  return (
    <>
      <section>
        <EventCard
          id={1}
          title="placeholder title"
          slug="place-holder-slug"
          excerpt="placeholder excerpt"
          place="placeholder place"
          image=""
          date="placeholder date"
        />

        {events.map((e: Event) => (
          <EventCard
            key={e.id}
            id={e.id}
            title={e.title}
            slug={e.slug}
            excerpt={e.excerpt}
            place={e.place}
            image={e.image}
            date={e.date}
          />
        ))}
      </section>
    </>
  );
};

export default EventsPage;
