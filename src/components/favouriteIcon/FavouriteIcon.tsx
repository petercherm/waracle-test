import { FavouriteIconContainer } from "./FavouriteIcon.styles";

export interface FavouriteIconProps {
  isFavourite: boolean;
  isDisabled: boolean;
  isUpdating: boolean;
  onToggleFavourite: () => void;
}

export const FavouriteIcon = ({
  isFavourite,
  isDisabled,
  isUpdating,
  onToggleFavourite
}: FavouriteIconProps) => {
  return (
    <FavouriteIconContainer
      onClick={onToggleFavourite}
      isDisabled={isDisabled}
      isUpdating={isUpdating}
    >
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        clipRule="evenodd"
        strokeMiterlimit="1.5"
      >
        <path
          d="M25 13c4.21-8 12.631-8 16.842-4 4.211 4 4.211 12 0 20C38.894 35 31.315 41 25 45c-6.316-4-13.895-10-16.842-16-4.21-8-4.21-16 0-20S20.79 5 25 13Z"
          fill={isFavourite ? "red" : "#eee"}
          stroke={isFavourite ? "red" : "black"}
          strokeWidth="2"
        />
      </svg>
    </FavouriteIconContainer>
  );
};
