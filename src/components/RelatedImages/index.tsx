import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { capitalize } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { themePalette } from "../../config/theme.config";
import { getBreedImageList } from "../../redux/breedsImages/selectors";
import { RootState } from "../../redux/store";
import { ImageCard } from "../ImageCard";

const RelatedImages: React.FC<{}> = () => {
  const { breedName } = useParams<{
    breedName: string;
  }>();

  const navigate = useNavigate();

  const ImagesList = useSelector((state: RootState) =>
    getBreedImageList(state, breedName || "")
  );

  const ShuffleReel = ImagesList.sort(() => 0.5 - Math.random());

  const ImagesReel = ShuffleReel.slice(0, 3);

  const viewSelectedImage = (imageUrl: string) => {
    let splitUrl: string[] = imageUrl.split("/");
    let breedName: string = splitUrl[4];
    let imageId: string = splitUrl[5].split(".")[0];
    navigate(`/breed/${breedName}/image/${imageId}`);
  };

  return (
    <Container sx={{ backgroundColor: themePalette.ALICE_BLUE, p: 5, mt: 7 }}>
      <Grid mb={5}>
        <Typography color={themePalette.CERULEAN} variant="h5">
          Related Images from {capitalize(breedName)}
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent={"center"} mb={"30px"}>
        {ImagesReel.map((reel: string) => (
          <Grid item xs={12} md={4} key={reel}>
            <ImageCard image={reel} fetchImage={viewSelectedImage} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RelatedImages;
