import { useSelector } from "react-redux";
import MovieCard from "./common/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopMovies() {
  const topMovies = useSelector((store) => store.home.topMovies);
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <>
      <h2>Top Movies</h2>
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          // flexWrap: "wrap",
          width: "1100px",
        }}
      >
        <Slider {...carouselSettings}>
          {topMovies.map((movie) => (
            <MovieCard
              {...{
                image: movie.poster_path,
                title: movie.title,
                releaseDate: movie.release_date,
                id: movie.id,
                entityType: "topMovies",
              }}
              key={movie.id}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TopMovies;
