import { title } from "process";
import EventCard from "./_components/EventCard";
import { getAllEvents } from "../actions/actions";
import TitleCard from "../components/TitleCard";

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
  heroAsset: Asset;
  location: string;
  date: string;
  event: object;
}

const EventsPage = async () => {
  const events: Event[] = await getAllEvents();
  return (
    <>
      <TitleCard title="Events" />
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
            location={e.location}
            asset={e.asset}
            heroAsset={e.heroAsset}
            date={e.date}
            event={e}
          />
        ))}
      </section>
    </>
  );
};

export default EventsPage;
