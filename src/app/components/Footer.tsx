import Image from "next/image";
import Logo from "./Logo"
import { BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
    return (
      <>
        <footer className=" relative   ">
          <Image src="/assets/background_images/footerbg.jpg" width={1920} height={800} alt="footerbg " className="   " />
          <div className=" absolute inset-0 bg-(--black) opacity-70 "></div>
          <article className=" absolute w-full z-10 top-[25%] ">
            <section className="grid grid-cols-3 ">
              <div className="mx-auto">
                <Logo />
                <h4 className="mt-5">Location</h4>
                <p>Kompagnistræde 278</p>
                <p>1265 Købehavn K</p>
                <h4 className="mt-5">Opening Hours</h4>
                <p>WED - THU 10:30 PMTO 3 AM </p>
                <p>SAT - SUN: 11 PM TO 5 AM</p>
              </div>

              <div className="mx-auto ">
                <h4 className="uppercase">news</h4>
                <div className=" flex items-start ">
                  <Image src="/assets/content/track2.jpg" width={120} height={120} alt="newsimg1" className="" />
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                    <p>April 17, 2026</p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <Image src="/assets/content/track2.jpg" width={120} height={120} alt="newsimg1" />
                  <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                    <p>April 17, 2026</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto ">
                <h4 className="uppercase">Recent Posts</h4>
                <div className="flex items-start">
                  <p>X</p>
                  <div>
                    <p>It is a long established fact that a reader will be distracted by the readable... </p>
                    <p>5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <p>X</p>
                  <div>
                    <p>It is a long established fact that a reader will be distracted by the readable... </p>
                    <p>5 hours ago</p>
                  </div>
                </div>
              </div>
            </section>

            <p className="text-center">Stay Connected With Us </p>
            <article className="flex justify-center gap-5 mt-3  ">
              <BsFacebook className="border-2 px-2 size-9" />
              <FaSnapchatGhost className="border-2 px-2 size-9  " />
              <FaInstagram className="border-2 px-2 size-9" />
            </article>
            <div className=" flex justify-between mx-10 ">
              <p>Night Club - All Rights Reserved</p>
              <p>Copyright © NightClub</p>
            </div>
          </article>
        </footer>
      </>
    );
}