import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import { themePalette } from "../../config/theme.config";

interface ICardProps {
  image: string;
}

export const ImageCard: React.FC<ICardProps> = ({ image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: themePalette.LINEN,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={image}
          alt="green iguana"
          sx={{
            bgcolor: themePalette.CHAMPAGNE,
            objectFit: "cover",
            objectPosition: "0px 10%",
          }}
        />
      </CardActionArea>
    </Card>
  );
};
