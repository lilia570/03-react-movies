import type { Movie } from "../types/movie";
import styles from "./MovieGrid.module.css";

interface Props {
  movies: Movie[];
  onOpen: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onOpen }: Props) {
  return (
    <ul className={styles.grid}>
      {movies.map((m) => (
        <li key={m.id} onClick={() => onOpen(m)}>
          <div className={styles.card}>
            {m.poster_path ? (
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                alt={m.title}
                loading="lazy"
              />
            ) : (
              <div className={styles.noImg}>No image</div>
            )}
            <h2 className={styles.title}>{m.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
