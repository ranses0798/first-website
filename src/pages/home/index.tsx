import React from "react";
import { ImageGallery } from "../../common/ImageGallery";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogue } from "../../redux/breeds/reducers";
import { fetchImages } from "../../redux/breedsImages/reducers";
import { getBreedImageList } from "../../redux/breedsImages/selectors";
import { RootState } from "../../redux/store";

const HomePage: React.FC<{}> = () => {
  const { breedName: selectedBreed } = useParams<{
    breedName: string;
  }>();

  const navigate = useNavigate();

  const imagesGallery = useSelector((state: RootState) =>
    getBreedImageList(state, selectedBreed || "")
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCatalogue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (selectedBreed) {
      dispatch(fetchImages(selectedBreed));
    }
  }, [dispatch, selectedBreed]);

  const viewSelectedImage = (imageUrl: string) => {
    let splitUrl: string[] = imageUrl.split("/");
    let breedName: string = splitUrl[4];
    let imageId: string = splitUrl[5].split(".")[0];
    navigate(`/breed/${breedName}/image/${imageId}`);
  };

  return (
    <ImageGallery
      name={selectedBreed || ""}
      gallery={imagesGallery || []}
      fetchImage={viewSelectedImage}
    />
  );
};

export { HomePage };
