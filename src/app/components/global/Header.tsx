"use client";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
const MotionImage = motion.create(Image);

const links = [
  { href: "/", label: "Home", isActive: (p: string) => p === "/" },
  {
    href: "/events/",
    label: "Events",
    isActive: (p: string) => p.startsWith("/events"),
  },
  {
    href: "/booktable/",
    label: "Book table",
    isActive: (p: string) => p.startsWith("/booktable"),
  },
  {
    href: "/contact/",
    label: "Contact us",
    isActive: (p: string) => p.startsWith("/contact"),
  },
];

export default function Header() {
  const currentPath = usePathname();

  const [hovered, setHovered] = useState<string | null>(null);

  const activeHref = links.find((l) => l.isActive(currentPath))?.href ?? null;
  const underlineAt = hovered ?? activeHref;

  return (
    <div className="bg-(--pink) sticky top-0  z-50">
      <header className=" @container  bg-(--black) py-3 border-t-2 border-b-2 h-31 border-border-header ">
        <article className=" flex justify-evenly h-full place-items-center m-auto gap-8  ">
          <Logo />

          <button popoverTarget="popover" className="@3xl:hidden ">
            ≡
          </button>
          <div
            id="popover"
            popover="auto"
            className="   bg-(--black) opacity-70 w-screen h-screen open:grid grid-cols-1 text-center gap-1"
          >
            <button
              popoverTarget="popover"
              popoverTargetAction="hide"
              className=""
            >
              X
            </button>

            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Events</Link>
            <Link href={"/"}>Book Table</Link>
            <Link href={"/"}>Contact us</Link>
          </div>

          <nav
            className="hidden @3xl:flex justify-evenly place-items-center gap-10 uppercase "
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((link) => {
              const active = link.isActive(currentPath);
              return (
                <div
                  key={link.href}
                  className="relative text-[24px]"
                  onMouseEnter={() => setHovered(link.href)}
                >
                  <RollingLink
                    href={link.href}
                    ariacurrent={active ? true : undefined}
                  >
                    {link.label}
                  </RollingLink>

                  {underlineAt === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute inset-x-0 mx-auto "
                      transition={{
                        type: "spring",
                        stiffness: 1000,
                        damping: 200,
                      }}
                    >
                      <MotionImage
                        src="/assets/bottom_line_slider/bottom_line2.png"
                        width={200}
                        height={100}
                        alt="slider"
                        className="absolute mx-auto "
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>
        </article>
      </header>
    </div>
  );
}

const RollingLink = ({
  children,
  href,
  ariacurrent,
}: {
  children: string;
  href: string;
  ariacurrent?: boolean;
}) => {
  const duration = 0.25;
  const stagger = 0.025;

  return (
    <>
      <motion.a
        initial="initial"
        whileHover="hovering"
        href={href}
        className="relative block overflow-hidden whitespace-pre "
      >
        <div>
          {children.split("").map((letter, index) => {
            return (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                    color: ariacurrent ? "var(--pink)" : "currentcolor",
                  },
                  hovering: { y: "-100%", color: "var(--pink)" },
                }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  delay: stagger * index,
                }}
                className="inline-block"
                key={index}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>

        <div className="absolute inset-0  ">
          {children.split("").map((letter, index) => {
            return (
              <motion.span
                variants={{
                  initial: { y: "100%" },
                  hovering: { y: 0, color: "var(--pink)" },
                }}
                transition={{
                  duration: duration,
                  ease: "easeInOut",
                  delay: stagger * index,
                }}
                className="inline-block"
                key={index}
              >
                {letter}
              </motion.span>
            );
          })}
        </div>
      </motion.a>
    </>
  );
};
