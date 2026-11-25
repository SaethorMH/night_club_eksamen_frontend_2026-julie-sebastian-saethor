import { API_URL } from "@/config";
import Image from "next/image";
import * as motion from "motion/react-client";

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

                                // AI
async function getGallery():Promise<Gallery[]> {
  const response = await fetch(API_URL + "gallery");
  const data = await response.json();
  return data;
}

// AI
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
    // AI
    <section className="grid grid-cols-12 grid-rows-2 gap-1 h-136 p-4">
      {gallery.map((g, i) => (
        // AI
        <div key={g.id} className={`relative overflow-hidden ${spans[i]}`}>
          <motion.div initial="initial" whileHover="hovering">
            <Image key={g.id} src={API_URL + g.asset.url} alt={g.asset.alt} fill className="object-cover" />

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
                  <div style={CornerShapeRightBottom} className="size-20 rotate-180 absolute bottom-0 right-0" ></div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}


    
