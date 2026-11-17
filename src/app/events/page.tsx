import { title } from "process";
import EventCard from "./_components/EventCard";
import { getAllEvents } from "../actions/actions";

export interface Asset {
  url: string;
  width: number;
  height: number;
  alt: string;
}
export interface Event {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  asset: Asset;
  place: string;
  date: string;
}

const EventsPage = async () => {
  const events: Event[] = await getAllEvents();
  return (
    <>
      <section>
        {/* <EventCard
          id={1}
          title="placeholder title"
          slug="place-holder-slug"
          excerpt="placeholder excerpt"
          place="placeholder place"
          asset={{
            url: "placegholder url",
            width: 200,
            height: 200,
            alt: "placeholder alt",
          }}
          date="placeholder date"
        /> */}

        {events.map((e: Event) => (
          <EventCard
            key={e.id}
            id={e.id}
            title={e.title}
            slug={e.slug}
            excerpt={e.excerpt}
            place={e.place}
            asset={e.asset}
            date={e.date}
          />
        ))}
      </section>
    </>
  );
};

export default EventsPage;
