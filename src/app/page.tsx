import Hero from "./components/Hero";

export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));

  return <Hero />;
}
