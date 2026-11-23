import { Event } from "../page";
import Link from "next/link";
import Image from "next/image";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const EventCard = (event: Event) => {
  const d = new Date(event.date);
  const date = d.getDate();
  const month = MONTHS[d.getMonth()];
  const time = d.getHours();
  const minutes = convert(d.getMinutes());

  function convert(n: any) {
    n = String(n);
    if (n.length == 1) n = "0" + n;
    return n;
  }

  return (
    <article className="grid grid-cols-2">
      {event.id % 2 !== 0 && (
        <Image
          height={event.asset.height}
          width={event.asset.width}
          alt={event.asset.alt}
          src={event.asset.url}
          className="w-full"
        />
      )}
      <div className="flex flex-col  p-8.5">
        <h2 className="mb-2">{event.title}</h2>
        <p className="mb-4">
          <span className="text-(--pink) ">
            {month + " " + date + " · " + time + ":" + minutes}
          </span>
          | <span className="uppercase">{event.location}</span>
        </p>
        <p>{event.excerpt}</p>
        <Link
          href={"/events/" + event.slug}
          className="uppercase place-self-end mt-auto border-t-2 border-b-2 border-(--white) border-solid p-5"
        >
          read more
        </Link>
      </div>
      {event.id % 2 == 0 && (
        <Image
          height={event.asset.height}
          width={event.asset.width}
          alt={event.asset.alt}
          src={event.asset.url}
          className="w-full"
        />
      )}
    </article>
  );
};

export default EventCard;
