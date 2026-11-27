import SectionTitle from "../global/SectionTitle";
import AudioPlayer from "./AudioPlayer";
import { Track } from "./AudioPlayer";

const tracks: Track[] = [
  {
    id: 1,
    title: "Black Box Funky",
    src: "/assets/media/black-box-funky.mp3",
    cover: "/assets/content/track1.jpg",
  },
  {
    id: 2,
    title: "Euphoria",
    src: "/assets/media/euphoria.mp3",
    cover: "/assets/content/track2.jpg",
  },
  {
    id: 3,
    title: "Fashion Red Tape",
    src: "/assets/media/fashion-red-tape.mp3",
    cover: "/assets/content/track4.jpg",
  },
  {
    id: 4,
    title: "Black Box Funky",
    src: "/assets/media/black-box-funky.mp3",
    cover: "/assets/content/track1.jpg",
  },
  {
    id: 5,
    title: "Euphoria",
    src: "/assets/media/euphoria.mp3",
    cover: "/assets/content/track2.jpg",
  },
  {
    id: 6,
    title: "Fashion Red Tape",
    src: "/assets/media/fashion-red-tape.mp3",
    cover: "/assets/content/track4.jpg",
  },
];

const Section4 = () => {
  return (
    <section className="grid col-[full] grid-cols-subgrid">
      <SectionTitle title="Night Club Track" />
      <article className=" col-[content]">
        <AudioPlayer tracks={tracks} />
      </article>
    </section>
  );
};

export default Section4;
