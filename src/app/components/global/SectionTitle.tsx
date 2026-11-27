import Image from "next/image";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <section className="flex flex-col items-center col-[content] place-content-center align-middle h-20 w-full">
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

export default SectionTitle;
