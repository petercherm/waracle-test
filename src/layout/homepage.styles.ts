import styled from "styled-components";

export const Container = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes.medium
}));

export const ContentContainer = styled.div(({ theme }) => ({
  padding: theme.sizes.medium,
  maxWidth: theme.widths.maxContentWidth
}));
