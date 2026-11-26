import { API_URL } from "@/config";
import Image from "next/image";
import SectionTitle from "../global/SectionTitle";
import * as motion from "motion/react-client";
import Modalbox from "./modalbox";
export interface Asset {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface Gallery {
  id: number;
  asset: Asset;
  description: string;
}

                                
async function getGallery():Promise<Gallery[]> {
  const response = await fetch(API_URL + "gallery");
  const data = await response.json();
  return data;
}


const spans = [
  "col-span-3",
  "col-span-3",
  "col-span-4",
  "col-span-2", 
  "col-span-3",
  "col-span-5",
  "col-span-4", 
];
export default async function Section3() {
  const gallery = await getGallery();

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
  
  
  
  
  return (
    <>
      <SectionTitle title="Night club Gallery" />
      <section className="grid grid-cols-12 grid-rows-2 gap-1 h-136 p-4">
        {gallery.slice(0,spans.length).map((g, i) => (
          <motion.section key={g.id} className={`relative overflow-hidden ${spans[i]}`} initial="initial" whileHover="hovering" whileInView="inview" viewport={{ once: true }}>
             <button command="show-modal" commandfor={`modal-${g.id}`}></button> 

            <motion.div
              variants={{
                initial: { x: -200, opacity: 0 },
                inview: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute inset-0"
            >
              <Image src={API_URL + g.asset.url} alt={g.asset.alt} fill className="object-cover" />
            </motion.div>
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                hovering: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-(--black)/50 border-y-2 border-border-header"
            >
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hovering: { opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
              >
                <div style={CornerShapeLeftTop} className=" size-20 rotate-180 "></div>

                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    hovering: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={CornerShapeRightBottom} className="size-20 rotate-180 absolute bottom-0 right-0"></div>
                </motion.div>
              </motion.div>
            </motion.div>
             <Modalbox g={g} /> 
          </motion.section>
        ))}
      </section>
    </>
  );
}


    
