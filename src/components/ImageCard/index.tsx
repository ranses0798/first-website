import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import { themePalette } from "../../config/theme.config";

interface ICardProps {
  image: string;
  fetchImage: Function;
}

export const ImageCard: React.FC<ICardProps> = ({ image, fetchImage }) => {
  return (
    <Card
      sx={{
        maxWidth: 340,
        borderRadius: 0,
      }}
      elevation={0}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={image}
          alt="dog"
          sx={{
            bgcolor: themePalette.CHAMPAGNE,
            objectFit: "fill",
            objectPosition: "0px 10%",
            borderRadius: 0,
          }}
          onClick={() => {
            fetchImage(image);
          }}
        />
      </CardActionArea>
    </Card>
  );
};
