import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

function Home() {
  useEffect(() => {
    fetchDataFromApi("/trending/movie/day", {
      language: "en-US",
      page: 1
    })
      .then(data => console.log(data)) 
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;
