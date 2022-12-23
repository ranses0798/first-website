import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { dogList } from "../../api/dogList";
import { BasicList } from "../../common/BasicList";
import { DogListType } from "./types";
import { byBreed } from "../../api/byBreed";
import { ImageGallery } from "../../common/ImageGallery";

export const HomePage: React.FC<{}> = () => {
  const [allBreeds, setAllBreeds] = React.useState<DogListType>([]);

  const [selectedBreed, setSelectedBreed] = React.useState<string | null>(null);

  const [imageGallery, setImageGallery] = React.useState<string[] | null>(null);

  React.useEffect(() => {
    dogList
      .getAll()
      .then((r) => {
        const response = Object.keys(
          r.data && r.data.message ? r.data.message : []
        );
        setAllBreeds(response);
        setSelectedBreed(response.length ? response[0] : null);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  React.useEffect(() => {
    byBreed.getByBreed(selectedBreed || "").then((r) => {
      const response = r.data.message;
      setImageGallery(response);
    });
  }, [selectedBreed]);

const ChangeSelectedBreed = (name: string) => {
  setSelectedBreed(name)
  console.log(name)
}

  return (
    <Container sx={{ mt: 0 }} maxWidth="xl">
      <Grid container>
        <Grid item xs={2}>
          <BasicList name="Dog API" list={allBreeds} selectBreed = {ChangeSelectedBreed}/>
        </Grid>
        <Grid item xs={10}>
          <ImageGallery
            name={selectedBreed || ""}
            gallery={imageGallery || []}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
