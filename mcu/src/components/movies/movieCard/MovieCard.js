import React from "react";
import "./MovieCard.css";
// import * as movieImages from "../../../images/images.js";
import ironMan from "../../../images/images.js";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const MovieCard = () => {
  return (
    <ImageList className="movieCard">
      {/* {movieList.map((movie) => (
        <CardMedia
          className="movieCardMedia"
          component="img"
          src={movie.img}
          alt="Iron Man poster"
        />
      ))} */}
      {movieList.map((movie) => (
        <ImageListItem key={movie.img}>
          <img
            src={movie.img}
            // srcSet={movie.img}
            alt={movie.title}
            // loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const movieList = [
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "Iron Man",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg",
    title: "Iron Man 2",
  }
];

export default MovieCard;