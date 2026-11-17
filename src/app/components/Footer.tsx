import Image from "next/image";

export default function Footer(){
    return (
      <>
        <footer className=" relative">
          <Image src="/assets/background_images/footerbg.jpg" width={1920} height={800} alt="footerbg " className=" object-cover z-10"></Image>
          <div className="bg-footer-bg backdrop-brightness-50"></div>
        </footer>
      </>
    );
}