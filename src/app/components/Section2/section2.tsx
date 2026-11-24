import { API_URL } from "@/config";
import Image from "next/image";
import { Event } from "@/app/events/page";

async function getEvents() {
  const response = await fetch(API_URL + "events");
  const data = await response.json();
  return data;
}

export default async function Section2() {
  const events = await getEvents();
 

 const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
 const Dates = (e: Event) => {
   const d = new Date(e.date);
   const date = d.getDate();
   const month = MONTHS[d.getMonth()];
   const time = d.toLocaleTimeString("en-US",{
    minute: "2-digit",
    hour: "numeric",
    
   });
  

   
   return date + " " + month + "  " + time + "";
 };
   return (
     <article className="bg-[url('/assets/background_images/slider_bg_overlay.png')]">
       <section className="flex justify-center gap-5 mx-auto m-5 ">
         {events.map(
           (e: Event) =>
             e.isFeatured && (
               <div key={e.id}>
                 <article className="relative ">
                   <Image height={e.asset.height} width={e.asset.width} alt={e.asset.alt} src={e.asset.url} />
                   <section className="flex justify-end  mx-2 absolute bottom-0 bg-(--pink)">
                     <p>{e.title}</p>
                     <p>{Dates(e)}</p>
                   </section>
                 </article>
               </div>
             ),
         )}
       </section>
     </article>
   );
 }