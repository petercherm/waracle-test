import styled from "styled-components";

export const ImageTileContainer = styled.li(({ theme }) => ({
  listStyleType: "none",
  padding: `${theme.sizes.xSmall} ${theme.sizes.xSmall}`,
  width: "100%",

  [theme.mediaQuery.custom(500)]: {
    width: "50%"
  },

  [theme.mediaQuery.tablet]: {
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
  justifyContent: "space-between",
  backgroundColor: theme.colors.addImageColor,
  border: `1px solid ${theme.colors.primaryColor}`,
  margin: `${theme.sizes.medium} ${theme.sizes.small}`,
  padding: theme.sizes.small,
  aspectRatio: `auto 1/1`
}));

export const ImageContainer = styled.div<{ url: string }>(({ url }) => ({
  width: "100%",
  height: "80%",
  backgroundImage: `url(${url})`,
  backgroundSize: "cover"
}));
