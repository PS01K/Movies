import { useSelector } from "react-redux";
import MovieCard from "./common/MovieCard";

function TopMovies() {
  const topMovies = useSelector((store) => store.home.topMovies);

  return (
    <>
      <h2>Top Movies</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {topMovies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </>
  );
}

export default TopMovies;
