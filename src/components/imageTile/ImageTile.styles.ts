import styled from "styled-components";

export const ImageTileContainer = styled.li(({ theme }) => ({
  listStyleType: "none",
  padding: `${theme.sizes.xSmall} ${theme.sizes.xSmall}`,
  width: "100%",

  [theme.mediaQuery.custom(500)]: {
    width: "50%"
  },

  [theme.mediaQuery.custom(750)]: {
    width: "33%",
    padding: `${theme.sizes.medium} ${theme.sizes.small}`
  },

  [theme.mediaQuery.desktop]: {
    width: "25%"
  }
}));

export const ImageTileItem = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-around",
  backgroundColor: theme.colors.addImageColor,
  border: `1px solid ${theme.colors.primaryColor}`,
  margin: `${theme.sizes.medium} ${theme.sizes.small}`,
  padding: theme.sizes.small,
  aspectRatio: `auto 1/1`,
  borderRadius: theme.sizes.medium
}));

export const ImageContainerWrapper = styled.div(({ theme }) => ({
  width: "100%",
  height: "85%",
  borderRadius: theme.sizes.medium,
  overflow: "hidden"
}));

export const ImageContainer = styled.div.attrs({ role: "button" })<{
  url: string;
}>(({ url, theme }) => ({
  height: "100%",
  backgroundImage: `url(${url})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: theme.sizes.medium,
  transition: "transform 0.5s ease-in-out",
  cursor: "pointer",

  [":hover"]: {
    transform: "scale(1.1)"
  }
}));

export const ImageFunctionBarContainer = styled.div(({ theme }) => ({
  padding: theme.sizes.xSmall,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "15%",
  maxHeight: 60,
  flex: "auto 1 0",
  marginTop: theme.sizes.xSmall
}));
