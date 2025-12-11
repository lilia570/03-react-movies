import styles from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
interface SearchBarProps {
 action: (formData: FormData) => Promise<void>;
}

export default function SearchBar({ action }: SearchBarProps) {
    return (
       <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form}
          action={async (formData: FormData) => {
            const query = formData.get("query")?.toString().trim();
            if (!query) {
              toast.error("Please enter a search term");
              return;
            }
            await action(formData);
            (document.querySelector<HTMLInputElement>('input[name="query"]')!).value = "";
          }}
        >
      <input
        className={styles.input}
        name="query"
        placeholder="Search movies..."
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
    </div>
    </header>
  );
}
