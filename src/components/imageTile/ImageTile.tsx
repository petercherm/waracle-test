import { useDispatch, useSelector } from "react-redux";
import { ImageType } from "../../models/theCatApi/image.models";
import {
  setFavouriteAction,
  unsetFavouriteAction
} from "../../state/favourites/favouriteActions";
import {
  getFavourites,
  getFavouritesStatus
} from "../../state/favourites/favouriteSelectors";
import {
  FavouriteItem,
  FavouritesStatus
} from "../../state/favourites/favouritesReducer";
import { FavouriteIcon } from "../favouriteIcon/FavouriteIcon";
import { Vote } from "../vote/Vote";
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
  const favouritesStatus: FavouritesStatus = useSelector(getFavouritesStatus);
  const favourite = favourites.find(
    (favourite: FavouriteItem) => favourite.imageId === image.id
  );
  const isFavourite = Boolean(favourite);
  const isFavouritesUpdating = favouritesStatus.isUpdating;
  const isCurrentFavouriteUpdaing =
    favouritesStatus.updatingImageId == image.id;

  const handleToggleFavourite = () => {
    if (favourite) {
      dispatch(
        unsetFavouriteAction.request({
          favouriteId: favourite.id,
          imageId: favourite.imageId
        })
      );
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
            isDisabled={isFavouritesUpdating}
            isUpdating={isCurrentFavouriteUpdaing}
            onToggleFavourite={handleToggleFavourite}
          />
          <Vote />
        </ImageFunctionBarContainer>
      </ImageTileItem>
    </ImageTileContainer>
  );
};
