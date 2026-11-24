import { API_URL } from "@/config";

async function getEvents() {
  const response = await fetch(API_URL + "events");
  const data = await response.json();
  return data;
}

export default async function Section2() {
  const events = await getEvents();

  return (
    <section>
      {events.map((e: { title: string; isFeatured: boolean }) => (
        <>
          <h2>{e.title}</h2>
          <p>{e.isFeatured}</p>
        </>
      ))}
    </section>
  );
}
