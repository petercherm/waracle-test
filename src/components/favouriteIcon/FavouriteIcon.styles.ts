import styled from "styled-components";

export const FavouriteIconContainer = styled.div.attrs({ role: "button" })<{
  isDisabled: boolean;
  isUpdating: boolean;
}>(({ isDisabled, isUpdating }) => ({
  width: "20%",
  height: "80%",
  cursor: isDisabled ? "not-allowed" : "pointer",
  pointerEvents: isDisabled ? "none" : "all",
  transition: "opacity 0.5s ease-in-out",
  opacity: isUpdating ? 0.5 : 1,

  ["svg"]: {
    height: "100%",
    transition: "transform 0.5s ease-in-out",
    transform: isUpdating ? "scale(0.5)" : "scale(1)"
  },

  ["path"]: {
    transition: "all 0.5s ease-in-out"
  }
}));
