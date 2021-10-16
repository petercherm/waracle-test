import { ImageType } from "../../models/theCatApi/image.models";
import { FetchStatus, UploadStatus } from "../../store/rootAction";
import { AddImage } from "../addImage/AddImage";
import { ImageTile } from "../imageTile/ImageTile";
import { ErrorMessage, ImageGridContainer } from "./ImageGrid.styles";

export interface ImageGridProps {
  images: ImageType[];
  fetchStatus: FetchStatus;
  uploadStatus: UploadStatus;
  onUploadImage: () => void;
}

export const ImageGrid = ({
  images,
  fetchStatus,
  uploadStatus,
  onUploadImage
}: ImageGridProps) => {
  const { isFetching, isError, error } = fetchStatus;
  const { isError: isUploadError, error: uploadError } = uploadStatus;

  if (isError) {
    return (
      <ErrorMessage>
        Something went wrong: <strong>{error}</strong>
      </ErrorMessage>
    );
  }

  if (isFetching) {
    return <p>Loading images...</p>;
  }
  const renderImages = () =>
    images.map((image: ImageType) => (
      <ImageTile key={image.id} image={image} />
    ));

  return (
    <>
      {isUploadError && (
        <ErrorMessage>
          Image cound not be uploaded: <strong>{uploadError}</strong>
        </ErrorMessage>
      )}
      <p>
        {images.length
          ? `Your cats - number of images: ${images.length}`
          : "It looks like you haven't uploaded any images yet"}
      </p>
      <ImageGridContainer>
        {renderImages()}
        <AddImage onUploadImage={onUploadImage} />
      </ImageGridContainer>
    </>
  );
};
