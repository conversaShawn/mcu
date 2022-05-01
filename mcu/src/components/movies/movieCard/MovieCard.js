import React from "react";
import "./MovieCard.css";
import Card from "@mui/material/Card";
import ImageListItem from "@mui/material/ImageListItem";

const MovieCard = () => {
  return (
    <ImageListItem>
      {movieList.map((movie) => (
        <Card className="movieCard" key={movie.img}>
          <img src={movie.img} alt={movie.title} />
        </Card>
      ))}
    </ImageListItem>
  );
};

const movieList = [
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "Iron Man",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg",
    title: "The Incredidle HUlk",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg",
    title: "Iron Man 2",
  },
];

export default MovieCard;
