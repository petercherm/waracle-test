import styled from "styled-components";

export const Container = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes.medium,
  maxWidth: theme.widths.maxContentWidth
}));
