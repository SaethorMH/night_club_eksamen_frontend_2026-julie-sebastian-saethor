import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/assets/logo/Logo.png"
        width={189}
        height={46}
        alt="logo"
        className="object-cover"
      ></Image>
    </Link>
  );
};

export default Logo;
