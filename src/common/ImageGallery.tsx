import * as React from "react";
import {  Grid, Typography } from "@mui/material";
import { ImageCard } from "../components/ImageCard";
import { Container } from "@mui/system";
import { capitalize } from "lodash";

interface IImageGalleryProps {
  name: string;
  gallery: string[];
}

export const ImageGallery: React.FC<IImageGalleryProps> = ({
  name,
  gallery,
}) => {
  return (
    <Container>
      <Typography textAlign={"center"} color={"black"} variant="h5" m={3}>
        {capitalize(name)}
      </Typography>
      <Grid container spacing={2} justifyContent={"center"}>
        {gallery.map((g: string) => (
          <Grid item xs={6} md={4} key={g} >
            <ImageCard image={g}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
