import Image from "next/image";
import { Testimonial } from "./Section6";
import { BsFacebook } from "react-icons/bs";

import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  t: Testimonial;
};

const TestimonialCard = ({ t }: Props) => {
  return (
    <article
      id={`testimonial-${t.id}`}
      className="w-full h-full  justify-around place-self-center snap-always snap-center shrink-0 flex flex-col content-around place-items-center text-center"
    >
      <Image
        src={t.asset.url}
        alt={t.asset.alt}
        width={t.asset.width}
        height={t.asset.height}
      />
      <h2>{t.name}</h2>
      <p>{t.content}</p>
      <div className="flex gap-2">
        <Link href={t.facebook} target="_blank">
          <BsFacebook className="border-2 px-2 size-9" />
        </Link>
        <Link href={t.twitter} target="_blank">
          {" "}
          <BsTwitter className="border-2 px-2 size-9  " />
        </Link>

        <FaInstagram className="border-2 px-2 size-9" />
      </div>
    </article>
  );
};

export default TestimonialCard;
