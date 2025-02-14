import { Link } from "react-router-dom";

function MovieCard(props) {  
  return (
    <div
      style={{
        width: "200px",
        boxShadow: "2px 2px 2px grey",
        border: "0.5px solid white",
        margin: "2px 6px 6px 2px",
      }}
    >
      <Link to={`/${props.entityType}/${props.id}`}>
        <img
          style={{ width: "100%" }}
          src={"https://image.tmdb.org/t/p/original" + props.image}
        />
      </Link>
      <h2>{props.title}</h2>
      <span>{props.releaseDate}</span>
    </div>
  );
}

export default MovieCard;
