import Link from "next/link";
import { API_URL } from "../app/constants";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function getCredits(id: string) {
  return fetch(`${API_URL}/${id}/credits`).then((res) => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const credits = await getCredits(id);
  return (
    <div className='grid grid-cols-[1fr_2fr] gap-10 w-[80%] mx-auto'>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className='rounded-lg max-w-[70%] place-self-center'
      />
      <div className='flex flex-col gap-5 mt-10'>
        <h1 className='text-white text-4xl font-semibold'>
          <Link href={movie.homepage} target='_blank'>
            {movie.title}
          </Link>
        </h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <div>
          Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          <div className='flex flex-wrap gap-2 mt-2'>
            {movie.production_companies
              .filter((company) => company.logo_path !== null)
              .map((company) => (
                <div key={company.id} className='flex items-center gap-1'>
                  <img
                    className='h-10 w-auto object-contain bg-gray-400 p-1 rounded-sm'
                    src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                    alt={company.name}
                  />
                </div>
              ))}
          </div>
        </div>
        <h3>Top Credits</h3>
        <div className='flex gap-2 flex-wrap'>
          {credits.slice(0, 6).map((credit) => (
            <div key={credit.id} className='flex flex-col items-center gap-1'>
              <img
                className='h-30 w-auto object-contain rounded-sm'
                src={`https://image.tmdb.org/t/p/w300${credit.profile_path}`}
                alt={credit.name}
              />
              <span>{credit.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
