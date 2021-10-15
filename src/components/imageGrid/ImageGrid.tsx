import { ImageType } from "../../models/theCatApi/image.models";
import { FetchStatus } from "../../store/rootAction";
import { AddImage } from "../addImage/AddImage";
import { ImageGridContainer } from "./ImageGrid.styles";

export interface ImageGridProps {
  images: ImageType[];
  fetchStatus: FetchStatus;
}

export const ImageGrid = ({ images, fetchStatus }: ImageGridProps) => {
  const { isFetching, isError, error } = fetchStatus;

  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <>
      <p>
        {images.length
          ? `Your cats - number of images: ${images.length}`
          : "It looks like you haven't uploaded any images yet"}
      </p>
      <ImageGridContainer>
        <AddImage />
      </ImageGridContainer>
    </>
  );
};
