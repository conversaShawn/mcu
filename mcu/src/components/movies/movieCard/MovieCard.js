import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./MovieCard.css";
import image from "../../../images/iron_man.jpeg"

const MovieCard = () => {
  return (
    <Card className="movieCard" variant="outlined">
      <CardMedia 
      className="movieCardMedia"
      component="img"
      src={image}
      alt="Iron Man poster"
      />
    </Card>
  );
};

export default MovieCard;