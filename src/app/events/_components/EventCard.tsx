import { Event } from "../page";
import Link from "next/link";
const EventCard = (event: Event) => {
  return (
    <article>
      <h2>{event.title}</h2>
      <p>
        <span>{event.date}</span>
        <span>{event.place}</span>
      </p>
      <p>{event.excerpt}</p>
      <Link href={"/events/" + event.slug}>readmore</Link>
    </article>
  );
};

export default EventCard;
