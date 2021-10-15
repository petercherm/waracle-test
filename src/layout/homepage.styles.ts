import styled from "styled-components";

export const Container = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes.medium,
  textAlign: "center"
}));

export const ContentContainer = styled.div(({ theme }) => ({
  padding: theme.sizes.medium,
  maxWidth: theme.widths.maxContentWidth,
  margin: "auto"
}));

export const HiddenFileInput = styled.input.attrs({
  type: "file",
  accept: "image/*"
})({
  display: "none"
});
