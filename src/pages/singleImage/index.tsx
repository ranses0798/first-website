import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { capitalize } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedImages from "../../components/RelatedImages";
import { themePalette } from "../../config/theme.config";
import { getBreedImageById } from "../../redux/breedsImages/selectors";
import { RootState } from "../../redux/store";

export const ImagePage: React.FC<{}> = () => {
  const { breedName, imageId } = useParams<{
    breedName: string;
    imageId: string;
  }>();

  const props = { breedName: breedName || "", imageId: imageId || "" };
  const getImageById = useSelector((state: RootState) =>
    getBreedImageById(state, props)
  );

  return (
    <Container disableGutters>
      <Grid
        container
        pt={5}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Card
            sx={{
              width: 345,
              height: 400,
              borderRadius: 0,
              bgcolor: themePalette.LINEN,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 2,
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <CardMedia
              component="img"
              height="300"
              width="300"
              image={getImageById}
              alt="dog"
              sx={{
                bgcolor: themePalette.CHAMPAGNE,
                objectFit: "fill",
                objectPosition: "0px 10%",
              }}
            />
            <CardContent>
              <Typography
                color={"black"}
                fontFamily={themePalette.FONT_CURS}
                fontSize={"30px"}
                textAlign={"center"}
              >
                {capitalize(breedName)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <RelatedImages />
    </Container>
  );
};
