import { Event } from "../page";
import Link from "next/link";
import Image from "next/image";
const EventCard = (event: Event) => {
  return (
    <article className="grid grid-cols-2">
      {event.id % 2 == 0 && (
        <Image
          height={event.asset.height}
          width={event.asset.width}
          alt={event.asset.alt}
          src={event.asset.url}
          className="cover object-fill"
        />
      )}
      <div className="flex flex-col content-evenly">
        <h2>{event.title}</h2>
        <p>
          <span>{event.date}</span>
          <span>{event.place}</span>
        </p>
        <p>{event.excerpt}</p>
        <Link href={"/events/" + event.slug}>readmore</Link>
      </div>
      {event.id % 2 !== 0 && (
        <Image
          height={event.asset.height}
          width={event.asset.width}
          alt={event.asset.alt}
          src={event.asset.url}
          className="cover object-fill"
        />
      )}
    </article>
  );
};

export default EventCard;
