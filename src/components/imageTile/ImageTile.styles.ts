import styled from "styled-components";

export const ImageTileContainer = styled.li(({ theme }) => ({
  listStyleType: "none",
  width: `calc(25% - 3 * ${theme.sizes.medium})`,
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
