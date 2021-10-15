import { AddImageContainer } from "./AddImage.styles";

export interface AddImageProps {
  onUploadImage: () => void;
}

export const AddImage = ({ onUploadImage }: AddImageProps) => {
  return <AddImageContainer onClick={onUploadImage} />;
};
