import { API_URL } from "@/config";
import Image from "next/image";
import { Event } from "@/app/events/page";

import * as motion from "motion/react-client";

async function getEvents() {
  const response = await fetch(API_URL + "events");
  const data = await response.json();
  return data;
}
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
export default async function Section2() {
  const events = await getEvents();
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const Dates = (e: Event) => {
    const d = new Date(e.date);
    const date = d.getDate();
    const month = MONTHS[d.getMonth()];
    const time = d.toLocaleTimeString("en-US", {
      minute: "2-digit",
      hour: "numeric",
    });

    return date + " " + month + "   " + time + " ";
  };
  return (
    <article className="bg-[url('/assets/background_images/slider_bg_overlay.png')]">
      <section className="flex justify-center gap-5 mx-auto m-5 ">
        {events.map(
          (e: Event) =>
            e.isFeatured && (
              <div key={e.id}>
               
                  <motion.div initial="initial" whileHover="hovering" className="relative">
                    <Image height={e.asset.height} width={e.asset.width} alt={e.asset.alt} src={e.asset.url} />

                    <motion.div
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        hovering: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-(--black)/50 border-t-2 border-border-header"
                    >
                      <motion.div
                        variants={{
                          initial: { x: -20, opacity: 0 },
                          hovering: { x: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div style={CornerShapeLeftTop} className=" size-20 rotate-180 "></div>
                        <button className="grid mx-auto mt-5 bg-(--pink) p-3">Book now</button>
                      </motion.div>
                      <section className="bg-(--black)/70 absolute bottom-0 max-inline-xl px-5 ">
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                      </section>
                      <motion.div
                        className="absolute bottom-0 right-0"
                        variants={{
                          initial: { x: 20, opacity: 0 },
                          hovering: { x: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          variants={{
                            initial: { opacity: 0 },
                            hovering: { opacity: 1 },
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div style={CornerShapeRightBottom} className=" size-20  rotate-180 "></div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <section className="flex justify-around  bg-(--pink) p-3">
                    <p>{Dates(e)}</p>
                    <p>{e.location}</p>
                  </section>
                
              </div>
            ),
        )}
      </section>
    </article>
  );
}
