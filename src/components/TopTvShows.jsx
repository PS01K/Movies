import { useSelector } from "react-redux";
import MovieCard from "./common/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopTvShows() {
  const topTvShows = useSelector((store) => store.home.topTvShows);
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
      <h2>Top TV Shows</h2>
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          // flexWrap: "wrap",
          width: "1100px",
        }}
      >
        <Slider {...carouselSettings}>
          {topTvShows.map((movie) => (
            <MovieCard
              {...{
                image: movie.poster_path,
                title: movie.original_name,
                releaseDate: movie.first_air_date,
              }}
              key={movie.id}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TopTvShows;
