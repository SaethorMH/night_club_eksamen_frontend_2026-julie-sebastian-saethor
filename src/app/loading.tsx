import Image from "next/image";

export default function Loading() {
  return (
    <section className="fixed inset-0 z-9999 grid bg-(--black)">
      <Image
        src={"/assets/loader/madbars.gif"}
        alt="loading"
        height={50}
        width={50}
        className="place-self-center"
        unoptimized
      />
    </section>
  );
}
