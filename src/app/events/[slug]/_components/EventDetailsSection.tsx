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
    <section className="grid grid-cols-subgrid col-[full]">
      <Image
        src={event.heroAsset.url}
        alt={event.heroAsset.alt}
        width={event.heroAsset.width}
        height={event.heroAsset.height}
        className="w-full col-[full]"
      />
      <article className=" flex flex-col justify-evenly gap-4 py-20   col-[content]">
        <h2>{event.title}</h2>
        <div className="flex gap-4 uppercase">
          {event.lineup.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <div>
          <div className="flex  gap-2">
            <p className="text-(--pink) ">
              {month +
                " " +
                date +
                " " +
                year +
                " · " +
                time +
                ":" +
                (minutes !== undefined ? minutes : "00")}
            </p>
            <p>|</p>
            <p>{event.price}</p>
          </div>
          <div className="flex  gap-2">
            <p className="text-(--pink)">Location: </p>
            <p>{event.location}</p>

            <p>|</p>
            <p className="text-(--pink)">Category: </p>
            <p>{event.category}</p>
          </div>
        </div>
        <p className="mb-8">{event.description}</p>
        <p className="whitespace-pre-line text-[16px]/4">{event.content}</p>
        <div>
          <h3 className="uppercase">Schedule:</h3>
          {event.schedule.map((s) => (
            <div key={s.label} className="flex gap-4">
              <p className="text-(--pink)">{s.time}</p>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 uppercase text-[24px]">
          <p className="text-(--pink)">doors open {event.doorsOpen}</p>
          <p>|</p>
          <p>agelimit {event.ageLimit}</p>
        </div>
      </article>
    </section>
  );
};

export default EventDetailsSection;
