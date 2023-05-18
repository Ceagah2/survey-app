import React from "react";

import { Container, Children } from "./styles";

interface ButtonProps {
  onPress: () => void;
  children?: React.ReactNode;
  backgroundColor?: string;
  height?: number;
}

const Button = (props: ButtonProps) => {
  return (
    <Container onPress={props.onPress} backgroundColor={props.backgroundColor} height={props.height}>
      <Children>{props.children}</Children>
    </Container>
  );
};

export default Button;
