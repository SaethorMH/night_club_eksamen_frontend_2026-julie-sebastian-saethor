import EventCard from "./_components/EventCard";
import { getPaginatedEvents } from "../actions/actions";
import TitleCard from "../components/TitleCard";
import PageNav from "./_components/PageNav";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export interface Asset {
  url: string;
  width: number;
  height: number;
  alt: string;
}
export interface Schedule {
  time: string;
  label: string;
}
export interface Event {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  content: string;
  date: string;
  doorsOpen: string;
  asset: Asset;
  heroAsset: Asset;
  location: string;
  category: string;
  lineup: string[];
  schedule: Schedule[];
  price: string;
  ageLimit: string;
  isFeatured: boolean;

  event: object;
}

const EventsPage = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const events: Event[] = await getPaginatedEvents(currentPage);
  await new Promise((r) => setTimeout(r, 1000));
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
            slug={e.slug}
            title={e.title}
            excerpt={e.excerpt}
            description={e.description}
            content={e.content}
            date={e.date}
            doorsOpen={e.doorsOpen}
            asset={e.asset}
            heroAsset={e.heroAsset}
            location={e.location}
            category={e.category}
            lineup={e.lineup}
            schedule={e.schedule}
            price={e.price}
            ageLimit={e.ageLimit}
            isFeatured={e.isFeatured}
            event={e.event}
          />
        ))}
        <PageNav currentPage={currentPage} />
      </section>
    </>
  );
};

export default EventsPage;
