import { API_URL } from "@/config";
import {Gallery} from "./section3"
import Image from "next/image";
import { AiOutlineX } from "react-icons/ai";





const CornerShapeLeftTop = {
    backgroundColor: "var(--pink)",
    borderTopLeftRadius: "5rem",
    cornerTopLeftShape: "bevel",
  };

  const CornerShapeRightBottom = {
    backgroundColor: "var(--pink)",
    borderBottomRightRadius: "5rem",
    cornerBottomRightShape: "bevel",
  };



type Props = {
  g: Gallery
};
declare module "react" {
  interface ButtonHTMLAttributes<T> {
    command?: string;
    commandfor?: string;
    closedby?:string;
  }
  interface DialogHTMLAttributes<T> {
    closedby?: "any" | "closerequest" | "none";
  }






}
export default function Modalbox({g}:Props){
return (
  <>
    <button className="absolute inset-0 z-10 w-full h-full " closedby="none" command="show-modal" commandfor={`modal-${g.id}`}></button>

    <dialog className="backdrop:bg-[oklch(0.2024_0_0/90%)] hidden open:block overflow-visble bg-transparent scrollbar-none fixed  mx-auto mt-4" id={`modal-${g.id}`} closedby="any">
      <Image src={API_URL + g.asset.url} width={g.asset.width} height={g.asset.height} alt={g.asset.alt} className="border  border-border-header w-full  " />
      <div className="relative">
        <Image src="/assets/icons/pager_divider.png" width={20} height={20} alt="left" className="absolute top-0 right-2" />
      </div>
      <article className="text-start bg-black ">
        <section className="max-inline-3xl p-5 ">
          <h2 className="mt-2">Night club Party</h2>
          <p className="text-xs/7 mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,you need to bes sure there isn't anything embarrasing hidden in the middle of text. All the Lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary,making this the first true generator on the internet.</p>
        </section>
        <div className="uppercase place-self-end mt-4 border-t-2 border-b-2 mx-5 text-xs border-(--white) border-solid p-2">Read more</div>
      </article>
      <button className="bg-black  " command="close" commandfor={`modal-${g.id}`}>
        <AiOutlineX className="size-10 absolute top-0 right-5 mt-2 text-(--pink)" />
      </button>
    </dialog>
  </>
);
} 









