import styled from "styled-components";

export const AddImageContainer = styled.li.attrs({ role: "button" })(
  ({ theme }) => ({
    width: "25%",
    backgroundColor: theme.colors.addImageColor,
    border: `1px dashed ${theme.colors.primaryColor}`,
    aspectRatio: `auto 1/1`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",

    ["&:hover"]: {
      borderColor: theme.colors.hightLightColor,
      backgroundColor: theme.colors.hoverBackgroundColor,

      ["&::before"]: {
        color: theme.colors.hightLightColor,
        borderColor: theme.colors.hightLightColor
      }
    },

    ["&::before"]: {
      content: '"+"',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: `calc(2* ${theme.fontSizes.xlarge})`,
      width: "40%",
      height: "40%",
      borderRadius: "50%",
      border: `1px dashed ${theme.colors.primaryColor}`,
      transition: "all 0.3s ease-in-out"
    }
  })
);
