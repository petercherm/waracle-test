import { ImageType } from "../../models/theCatApi/image.models";
import { ImageContainer, ImageTileContainer } from "./ImageTile.styles";

export interface ImageTileProps {
  image: ImageType;
}

export const ImageTile = ({ image }: ImageTileProps) => {
  return (
    <ImageTileContainer>
      <ImageContainer url={image.url} />
    </ImageTileContainer>
  );
};
