export type IBreedImages = {
  imageId: string;
  breedName: string;
  imageUrl: string;
};

export type ImagesSliceType = {
  id: string;
  imagesList: IBreedImages[];
};
