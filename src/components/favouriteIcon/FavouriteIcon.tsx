import { FavouriteIconContainer } from "./FavouriteIcon.styles";

export interface FavouriteIconProps {
  isFavourite: boolean;
  onToggleFavourite: () => void;
}

export const FavouriteIcon = ({
  isFavourite,
  onToggleFavourite
}: FavouriteIconProps) => {
  return (
    <FavouriteIconContainer onClick={onToggleFavourite}>
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        clipRule="evenodd"
        strokeMiterlimit="1.5"
      >
        <path
          d="M25 13c4.21-8 12.631-8 16.842-4 4.211 4 4.211 12 0 20C38.894 35 31.315 41 25 45c-6.316-4-13.895-10-16.842-16-4.21-8-4.21-16 0-20S20.79 5 25 13Z"
          fill={isFavourite ? "red" : "none"}
          stroke={isFavourite ? "none" : "black"}
          strokeWidth="2"
        />
      </svg>
    </FavouriteIconContainer>
  );
};
