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
  onViewImage: (imageUrl: string) => void;
}

export const ImageGrid = ({
  images,
  fetchStatus,
  uploadStatus,
  onUploadImage,
  onViewImage
}: ImageGridProps) => {
  const { isFetching, isError, error } = fetchStatus;
  const { isError: isUploadError, error: uploadError } = uploadStatus;

  if (isError) {
    return (
      <ErrorMessage data-testid="imageGrid__error--fetchError">
        Something went wrong: <br />
        <strong>{error}</strong>
      </ErrorMessage>
    );
  }

  if (isFetching) {
    return <p data-testid="imageGrid__loading">Loading images...</p>;
  }
  const renderImages = () =>
    images.map((image: ImageType) => (
      <ImageTile key={image.id} image={image} onViewImage={onViewImage} />
    ));

  return (
    <>
      {isUploadError && (
        <ErrorMessage data-testid="imageGrid__error--uploadError">
          Image cound not be uploaded: <br />
          <strong>{uploadError}</strong>
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
