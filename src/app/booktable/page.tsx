import BookingForm from "./_components/BookingForm";
import TitleCard from "../components/TitleCard";

export default async function Page() {
  await new Promise((r) => setTimeout(r, 1000));

  return (
    <>
      <TitleCard title="Book table" />

      <BookingForm />
    </>
  );
}
