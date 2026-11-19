import Image from "next/image";

type Props = {
  title: string;
};

const TitleCard = ({ title }: Props) => {
  return (
    <section className="flex flex-col items-center place-content-center align-middle h-68 w-full bg-black bg-[linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0.8)),url('/assets/background_images/footerbg.jpg')] bg-cover bg-center">
      <h1>{title}</h1>
      <Image
        src={"/assets/bottom_line_slider/bottom_line.png"}
        height={40}
        width={200}
        alt="title flair"
      />
    </section>
  );
};

export default TitleCard;
