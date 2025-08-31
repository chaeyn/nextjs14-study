"use client";

import { useRouter } from "next/navigation";

interface IRandomMovieProps {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
}

export default function RandomMovie({
  id,
  backdrop_path,
  title,
  overview,
}: IRandomMovieProps) {
  const router = useRouter();
  return (
    <div className='absolute top-0 left-0 w-screen h-screen z-0'>
      <div
        className='w-full h-full bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.3) 30%,
            rgba(20, 20, 20, 0.3) 30%,
            rgba(20, 20, 20, 0.95) 95%,
            rgba(20, 20, 20, 1) 100%
          ), url(${backdrop_path})`,
        }}
      />
      <div className='absolute top-24 left-20 p-20 z-10' style={{ pointerEvents: 'auto' }}>
        <h1
          className='text-8xl font-bold text-white mb-5'
          style={{
            textShadow:
              "-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black",
          }}
        >
          {title}
        </h1>
        <p className='text-white pt-5 w-[500px] leading-5 mb-5'>{overview}</p>
        <button
          className='px-4 py-3 mt-5 rounded-md border-none bg-gray-500/40 text-white text-base cursor-pointer hover:bg-gray-500/60 transition-colors relative z-50'
          onClick={() => router.push(`/movies/${id}`)}
          style={{ pointerEvents: 'auto' }}
        >
          Overview
        </button>
      </div>
    </div>
  );
}
