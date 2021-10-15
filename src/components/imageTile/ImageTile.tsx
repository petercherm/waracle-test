import { useDispatch, useSelector } from "react-redux";
import { ImageType } from "../../models/theCatApi/image.models";
import {
  setFavouriteAction,
  unsetFavouriteAction
} from "../../state/favourites/favouriteActions";
import { getFavourites } from "../../state/favourites/favouriteSelectors";
import { FavouriteItem } from "../../state/favourites/favouritesReducer";
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
  const favourites: FavouriteItem[] = useSelector(getFavourites);
  const favourite = favourites.find(
    (favourite: FavouriteItem) => favourite.imageId === image.id
  );
  const isFavourite = Boolean(favourite);

  const handleToggleFavourite = () => {
    if (favourite) {
      dispatch(unsetFavouriteAction.request({ favouriteId: favourite.id }));
    } else {
      dispatch(setFavouriteAction.request({ imageId: image.id }));
    }
  };

  return (
    <ImageTileContainer>
      <ImageTileItem>
        <ImageContainer url={image.url} />
        <ImageFunctionBarContainer>
          <FavouriteIcon
            isFavourite={isFavourite}
            onToggleFavourite={handleToggleFavourite}
          />
        </ImageFunctionBarContainer>
      </ImageTileItem>
    </ImageTileContainer>
  );
};
