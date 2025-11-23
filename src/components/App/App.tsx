import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.tsx";
import MovieGrid from "../MovieGrid/MovieGrid.tsx";
import MovieModal from "../MovieModal/MovieModal.tsx";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import css from './App.module.css';
import { fetchMovies } from "../../services/movieServices.ts";
import type {Movie} from "../../types/movie.ts";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalMovie, setModalMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      toast("Please enter your search query.");
      return;
    }

    try {
      setLoading(true);
      setError(false);
      setMovies([]);

      const data = await fetchMovies(query);

      if (data.results.length === 0) toast("No movies found.");

      setMovies(data.results);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {loading && < Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && movies.length > 0 && (
        <MovieGrid movies={movies} onOpen={setModalMovie} />
      )}
      <MovieModal movie={modalMovie} onClose={() => setModalMovie(null)} />
    </div>
  );
}
