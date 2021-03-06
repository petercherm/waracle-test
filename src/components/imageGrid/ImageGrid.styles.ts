import styled from "styled-components";

export const ImageGridContainer = styled.ul({
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  padding: 0
});

export const ErrorMessage = styled.p(({ theme }) => ({
  color: theme.colors.hightLightColor
}));
