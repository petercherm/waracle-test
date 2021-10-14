const customMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  phone: customMediaQuery(320),
  tablet: customMediaQuery(600),
  desktop: customMediaQuery(960),
  desktopLarge: customMediaQuery(1280)
};
