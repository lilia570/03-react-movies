 import Movie from "../types/movie";
import styles from "./MovieGrid.module.css";

interface Props {
  movies: Movie[];
  onOpen: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onOpen }: Props) {
  return (
    <div className={styles.grid}>
      {movies.map((m) => (
        <div key={m.id} className={styles.card} onClick={() => onOpen(m)}>
          {m.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
              alt={m.title}
            />
          ) : (
            <div className={styles.noImg}>No image</div>
          )}
          <h3>{m.title}</h3>
        </div>
      ))}
    </div>
  );
}
