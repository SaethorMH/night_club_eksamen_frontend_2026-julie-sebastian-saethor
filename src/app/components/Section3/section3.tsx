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

  return (
                                 // AI
    <section className="grid grid-cols-12 grid-rows-2 gap-1 h-136 p-4">
      {gallery.map((g, i) => (
                                            // AI
        <div key={g.id} className={`relative overflow-hidden ${spans[i]}`}>
          <Image src={API_URL + g.asset.url} alt={g.asset.alt} fill className="object-cover" />
        </div>
      ))}
    </section>
  );
}


    
