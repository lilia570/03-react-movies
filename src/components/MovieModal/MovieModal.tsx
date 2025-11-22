import { Movie } from "../types/movie.ts";
import styles from "./MovieModal.module.css";
import { createPortal } from "react-dom";

interface Props {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: Props) {
  if (!movie) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt="Poster"
          />
        )}
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
