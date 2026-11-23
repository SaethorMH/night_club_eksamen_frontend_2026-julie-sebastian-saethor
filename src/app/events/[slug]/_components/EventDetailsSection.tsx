import { Event } from "../../page";
import { Asset } from "../../page";
import Image from "next/image";
import { MONTHS } from "./EventComment";
type Props = {
  event: Event;
};

const EventDetailsSection = ({ event }: Props) => {
  const d = new Date(event.date);
  const date = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  const time = d.getHours();
  const minutes = convert(d.getMinutes());

  function convert(n: any) {
    n = String(n);
    if (n.length == 1) n = "0" + n;
  }

  return (
    <section>
      <Image
        src={event.heroAsset.url}
        alt={event.heroAsset.alt}
        width={event.heroAsset.width}
        height={event.heroAsset.height}
        className="w-full"
      />
      <article className="max-w-3xl m-auto">
        <h2>{event.title}</h2>
        <p className="text-(--pink)">{month + " " + date + " " + year}</p>
        <div className="flex  gap-2">
          <p className="text-(--pink)">Category: </p>
          <p>{event.category}</p>
          <p>|</p>
          <p className="text-(--pink)">Location: </p>
          <p>{event.location}</p>
        </div>

        <div className="flex gap-4 uppercase">
          {event.lineup.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <div>
          {event.schedule.map((s) => (
            <div key={s.label} className="flex gap-4">
              <p className="text-(--pink)">{s.time}</p>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
        <p>{event.category}</p>
        <p className="mb-8">{event.description}</p>
        <p className="whitespace-pre-line">{event.content}</p>
        <p>{event.price}</p>
      </article>
    </section>
  );
};

export default EventDetailsSection;
