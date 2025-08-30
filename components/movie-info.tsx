import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

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
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>
          <Link href={movie.homepage} target='_blank'>
            {movie.title}
          </Link>
        </h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <div>
          Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          <div className={styles.productionCompanies}>
            {movie.production_companies
              .filter((company) => company.logo_path !== null)
              .map((company) => (
                <div key={company.id} className={styles.companyItem}>
                  <img
                    className={styles.logo}
                    src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                    alt={company.name}
                  />
                </div>
              ))}
          </div>
        </div>
        <h3>Top Credits</h3>
        <div className={styles.credits}>
          {credits.slice(0, 6).map((credit) => (
            <div key={credit.id} className={styles.creditItem}>
              <img
                className={styles.creditLogo}
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
