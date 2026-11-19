
import Link from "next/link";
import Logo from "./Logo"
export default function Header(){
return (
  <header className="py-3 sticky border-2  border-border-header ">
    <article className=" flex justify-evenly place-items-center m-auto gap-8">
     <Logo/>
      <div className=" flex justify-evenly place-items-center gap-10 uppercase">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Events</Link>
        <Link href={"/"}>Book Table</Link>
        <Link href={"/"}>Contact us</Link>
      </div>
    </article>
  </header>
);

}