import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
import { setTopMovies, setTopTvShows, setUpcomingMovies } from "../redux/homeSlice";
import { useDispatch } from "react-redux";
import TopMovies from "./TopMovies";

function Home() {
  const dispatch = useDispatch();
  const commonApiParams = {
    language: "en-US",
    page: 1,
  }

  useEffect(() => {
    fetchDataFromApi("/trending/movie/day", commonApiParams)
      .then((data) => {
        dispatch(setTopMovies(data));
      })
      .catch((err) => console.error(err));

    fetchDataFromApi("/trending/tv/day", commonApiParams)
      .then((data) => {
        dispatch(setTopTvShows(data));
      })
      .catch((err) => console.error(err));

    fetchDataFromApi("/movie/upcoming", commonApiParams)
      .then((data) => {
        dispatch(setUpcomingMovies(data));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <TopMovies />
    </>
  );
}

export default Home;
