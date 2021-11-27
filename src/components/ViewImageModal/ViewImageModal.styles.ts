import styled, { keyframes } from "styled-components";

const overlayFadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalZoomInAnimation = keyframes`  
  from { transform: scale(0.5); }
  to { transform: scale(1); }
`;

const AnimatedOverlay = styled.div`
  animation: ${overlayFadeInAnimation} 0.5s ease-in-out;
`;

const AnimatedModal = styled.div`
  animation: ${modalZoomInAnimation} 0.5s ease-in-out;
`;

export const ViewImageModalOverlay = styled(AnimatedOverlay)(({ theme }) => ({
  display: "flex ",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.overlayColor,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh"
}));

export const ViewImageModalContainer = styled(AnimatedModal)(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "flex-start",
  maxWidth: "90vw",
  maxHeight: "90vh",
  alignItems: "center",
  backgroundColor: theme.colors.backgroundColor,
  overflow: "hidden"
}));

export const CloseButtonContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignSelf: "stretch",
  padding: theme.sizes.medium,
  paddingBottom: 0
}));

export const CloseButton = styled.div.attrs({ role: "button" })(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.sizes.large,
    height: theme.sizes.large,
    backgroundColor: theme.colors.buttonColor,
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.5s ease-in-out",

    [":hover"]: {
      backgroundColor: theme.colors.hoverBackgroundColor,

      ["::before"]: {
        color: theme.colors.hightLightColor
      }
    },

    ["::before"]: {
      content: '"X"',
      fontSize: theme.fontSizes.small,
      transition: "color 0.5s ease-in-out"
    }
  })
);

export const ImageContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: "1 0 auto",
  padding: theme.sizes.medium
}));

export const LargeImage = styled.img(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: `calc(80vh - ${theme.sizes.medium})`
}));
