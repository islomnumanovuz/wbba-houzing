import React, { memo } from "react";
import { Container } from "./Button.styled";

export const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  pr,
  pb,
  pt,
  color,
}) => {
  return (
    <Container
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      pr={pr}
      pl={pl}
      pt={pt}
      pb={pb}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      color={color}
    >
      {children}
    </Container>
  );
};

export default memo(Button);
