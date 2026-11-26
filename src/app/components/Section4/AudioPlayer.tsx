"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Volume2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface Track {
  id: number;
  title: string;
  src: string;
  cover: string;
}

const formatTime = (t: number) => {
  if (!Number.isFinite(t)) return "00:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

export default function AudioPlayer({ tracks }: { tracks: Track[] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [shuffle, setShuffle] = useState(false);

  const track = tracks[index];

  // Only runs when the track changes (not on play/pause)
  useEffect(() => {
    setTime(0);
    if (isPlaying) audioRef.current?.play().catch(() => setIsPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const next = () => {
    if (shuffle && tracks.length > 1) {
      let r = index;
      while (r === index) r = Math.floor(Math.random() * tracks.length);
      setIndex(r);
    } else {
      setIndex((i) => (i + 1) % tracks.length);
    }
  };

  const prev = () => setIndex((i) => (i === 0 ? tracks.length - 1 : i - 1));

  const selectTrack = (i: number) => {
    setIndex(i);
    setIsPlaying(true);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setTime(t);
  };

  const scrollStrip = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (el)
      el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div className="relative isolate mx-auto max-w-[1000px] bg-black py-6 text-white">
      <div className="flex items-start gap-8">
        <div className="relative h-[220px] w-[220px] shrink-0">
          <Image
            src={track.cover}
            alt={track.title}
            fill
            sizes="220px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex-1 pr-6 pt-8">
          <h2 className="mb-6 text-base font-normal uppercase tracking-wide">
            {track.title}
          </h2>

          <input
            type="range"
            className="w-full cursor-pointer accent-[#ff2d78]"
            min={0}
            max={duration || 0}
            step={0.1}
            value={time}
            onChange={seek}
            aria-label="Seek"
          />

          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="min-w-[110px] text-[0.8rem]">
              {formatTime(time)} / {formatTime(duration)}
            </span>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="grid cursor-pointer place-items-center text-white"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-2 border-white text-white"
              >
                {isPlaying ? (
                  <Pause className="h-[22px] w-[22px]" />
                ) : (
                  <Play className="h-[22px] w-[22px]" />
                )}
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="grid cursor-pointer place-items-center text-white"
              >
                <SkipForward className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShuffle((s) => !s)}
                aria-label="Shuffle"
                aria-pressed={shuffle}
                className={`grid cursor-pointer place-items-center ${
                  shuffle ? "text-[#ff2d78]" : "text-white"
                }`}
              >
                <Shuffle className="h-5 w-5" />
              </button>
            </div>

            <div className="flex w-40 items-center gap-2">
              <Volume2 className="h-5 w-5 shrink-0" />
              <input
                type="range"
                className="w-full cursor-pointer accent-[#ff2d78]"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Volume"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-1 flex items-center gap-3">
        <button
          onClick={() => scrollStrip(-1)}
          aria-label="Scroll left"
          className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center border-2 border-white text-white"
        >
          <ChevronLeft />
        </button>

        <div
          ref={stripRef}
          className="flex flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tracks.map((t, i) => (
            <button
              key={t.id}
              onClick={() => selectTrack(i)}
              className="relative aspect-[1/0.92] flex-[0_0_20%] cursor-pointer snap-start overflow-hidden"
            >
              <Image
                src={t.cover}
                alt={t.title}
                fill
                sizes="20vw"
                style={{ objectFit: "cover" }}
              />
              {i === index && (
                <>
                  <span className="absolute left-0 top-0 h-10 w-10 bg-[#ff2d78] [clip-path:polygon(0_0,100%_0,0_100%)]" />
                  <span className="absolute bottom-0 right-0 h-10 w-10 bg-[#ff2d78] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
                  <span className="absolute inset-0 m-auto grid h-10 w-10 place-items-center rounded-full border-2 border-[#ff2d78] text-[#ff2d78]">
                    {isPlaying ? (
                      <Pause className="h-[18px] w-[18px]" />
                    ) : (
                      <Play className="h-[18px] w-[18px]" />
                    )}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 bg-black/85 p-2 text-xs uppercase">
                    {t.title}
                  </span>
                </>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollStrip(1)}
          aria-label="Scroll right"
          className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center border-2 border-white text-white"
        >
          <ChevronRight />
        </button>
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={() => setTime(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onEnded={next}
      />
    </div>
  );
}
