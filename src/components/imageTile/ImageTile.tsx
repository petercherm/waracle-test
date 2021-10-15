import { useDispatch } from "react-redux";
import { ImageType } from "../../models/theCatApi/image.models";
import { setFavouriteAction } from "../../state/favourites/favouriteActions";
import { FavouriteIcon } from "../favouriteIcon/FavouriteIcon";
import {
  ImageTileItem,
  ImageContainer,
  ImageTileContainer,
  ImageFunctionBarContainer
} from "./ImageTile.styles";

export interface ImageTileProps {
  image: ImageType;
}

export const ImageTile = ({ image }: ImageTileProps) => {
  const dispatch = useDispatch();

  const handleToggleFavourite = () => {
    dispatch(setFavouriteAction.request({ imageId: image.id }));
  };

  return (
    <ImageTileContainer>
      <ImageTileItem>
        <ImageContainer url={image.url} />
        <ImageFunctionBarContainer>
          <FavouriteIcon
            isFavourite={false}
            onToggleFavourite={handleToggleFavourite}
          />
        </ImageFunctionBarContainer>
      </ImageTileItem>
    </ImageTileContainer>
  );
};
