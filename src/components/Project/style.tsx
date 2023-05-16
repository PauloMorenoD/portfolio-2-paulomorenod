import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { keyframes } from "@stitches/react";

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
  "@mobileLittle": {
    flexDirection: "column",
    alignItems: "self-start",
  },
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$grey1",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectImg = styled("img",{
  width: "100%",
  objectFit: "cover",
  borderRadius: "$2",
})

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
  display: "flex",
  justifyContent: "space-between",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey5",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const ProjectTitle = styled(Text, {});

export const Project = styled("article", {
  marginTop: "4rem",
  border: "1px solid gray",
  padding: "1rem",
  borderRadius: "$2",
  [`&:first-child`]: {
    [`& ${ProjectTitle}:first-child`]: {
      position: "relative",
      width: "max-content",

      "@mobile": {
        width: "auto",
      },

  
      },
    },
  },
);

export const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});


export const StackCard = styled("div", {
  borderRadius: "$1",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  [`& ${Text}`]: {
    opacity: 0,
    position: "absolute",
    transform: "translateY(-15%)",
    background: "$whiteFixed",
    boxShadow: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12))",
    padding: "0.4rem 1rem",
    borderRadius: "$1",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    color: "$blackFixed",

    "&:before": {
      content: "",
      zIndex: "-1",
      bottom: "-5px",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      borderTop: "25px solid $whiteFixed",
      transform: "translateX(-50%)",
      left: "50%",
    },
  },

  "&:hover": {
    [`& ${Text}`]: {
      opacity: 1,
      top: 0,
      transform: "translateY(-140%)",
      animation: `${scaleUp} 200ms`,
    },
  },
});

