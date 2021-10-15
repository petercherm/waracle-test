import { ImageType } from "../../models/theCatApi/image.models";
import {
  ImageTileItem,
  ImageContainer,
  ImageTileContainer
} from "./ImageTile.styles";

export interface ImageTileProps {
  image: ImageType;
}

export const ImageTile = ({ image }: ImageTileProps) => {
  return (
    <ImageTileContainer>
      <ImageTileItem>
        <ImageContainer url={image.url} />
      </ImageTileItem>
    </ImageTileContainer>
  );
};
