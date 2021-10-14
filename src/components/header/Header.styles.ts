import styled from "styled-components";

export const Heading = styled.h1(({ theme }) => ({
  fontSize: theme.fontSizes.large,
  margin: 0
}));

export const SubHeading = styled.p(({ theme }) => ({
  margin: `${theme.sizes.medium} 0 0 0`
}));

export const HeaderContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.headerColor,
  padding: theme.sizes.medium,
  margin: 0,
  borderBottom: `1px solid ${theme.colors.primaryColor}`
}));

export const Avatar = styled.img(({ theme }) => ({
  width: `calc(2 * ${theme.sizes.xLarge})`,
  height: `calc(2 * ${theme.sizes.xLarge})`,
  marginRight: theme.sizes.large
}));
