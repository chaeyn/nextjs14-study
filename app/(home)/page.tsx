import Movie from "../../components/Movie";
import RandomMovie from "../../components/RandomMovie";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <>
      <RandomMovie
        id={randomMovie.id}
        backdrop_path={randomMovie.backdrop_path}
        title={randomMovie.title}
        overview={randomMovie.overview}
      />
      <div className='relative z-20' style={{ pointerEvents: 'none' }}>
        <div className='grid grid-cols-5 gap-6 max-w-[90%] w-full mx-auto relative top-[520px] pb-24' style={{ pointerEvents: 'auto' }}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </>
  );
}
