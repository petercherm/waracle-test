import { useSelector } from "react-redux";
import { getImageUploadStatus } from "../../state/upload/uploadSelectors";
import { AddImageContainer, AddImageTile } from "./AddImage.styles";

export interface AddImageProps {
  onUploadImage: () => void;
}

export const AddImage = ({ onUploadImage }: AddImageProps) => {
  const { isUploading } = useSelector(getImageUploadStatus);

  return (
    <AddImageContainer data-testid="addImage__container">
      <AddImageTile
        isUploading={isUploading}
        {...(!isUploading && { onClick: onUploadImage })}
      />
    </AddImageContainer>
  );
};
