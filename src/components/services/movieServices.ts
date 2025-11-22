 
import axios from "axios";
import type { Movie } from "../types/movie.ts";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (query: string): Promise<{ results: Movie[] }> => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            query,
            include_adult: false,
            language: "en-US",
            page: 1,
        },
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzJmNTdlODY3NDg3OWM0YzBhNTkxNmU4MzRmMTA4ZCIsIm5iZiI6MTc2MzcxNzMwMy4yNzksInN1YiI6IjY5MjAzMGI3YjI3OWNhZjY2ODJlMmY5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EOlzcx46nUtvj1ZEKo09-6MBF_xx1GMpkB91yZKckk4`,
            accept: "application/json",
        },
    });

    return response.data;
}
