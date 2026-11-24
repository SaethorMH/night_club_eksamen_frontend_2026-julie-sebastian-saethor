import ContactForm from "@/app/contact/_components/ContactForm";
import TitleCard from "../components/global/TitleCard";

export default async function Page() {
  await new Promise((r) => setTimeout(r, 1000));

  return (
    <>
      <TitleCard title="Contact" />
      <ContactForm />
    </>
  );
}
