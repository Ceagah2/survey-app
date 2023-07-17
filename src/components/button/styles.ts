import styled from "styled-components/native";
import { ResponsiveSize } from "../../utils/responsive";
import { colors } from "../../styles/themes";

export const Container = styled.TouchableOpacity`
  width: 18%;
  height: ${(props : {height: number}) => 
    props.height ? props.height : "100%" };
  border-radius: 100px;
  justify-content: center;
  color: ${(props: { color: string }) =>
    props.color ? props.color : colors.white};
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor ? props.backgroundColor : colors.primary};
`;
export const Children = styled.Text`
  font-size: ${ResponsiveSize(14)};
  font-weight: bold;
  color: ${(props: { color: string }) =>
    props.color ? props.color : colors.white};
  text-align: center;
  padding-top: ${ResponsiveSize(5)};
`;

Children.defaultProps = Children.defaultProps || {};
Children.defaultProps.maxFontSizeMultiplier = 1.2;
