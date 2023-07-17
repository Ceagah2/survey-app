<<<<<<< HEAD:src/screens/Reports/styles.js
import styled from "styled-components/native";
import { colors } from "../../styles/themes";
import { ResponsiveSize } from "../../utils/responsive";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
`;

export const LoaderContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  z-index: 10;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImageContainer = styled.TouchableOpacity`
  width: 42%;
  height: 80%;
`;

export const Image = styled.Image`
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: -10px;
`;
export const HeaderLogo = styled.Image`
  width: 20%;
  height: 100%;
`;

export const Table = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: -10px;
`;

export const TableHeader = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const TableTitle = styled.Text`
  color: ${colors.black};
  font-size: ${ResponsiveSize(24)};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;
TableTitle.defaultProps = TableTitle.defaultProps || {};
TableTitle.defaultProps.maxFontSizeMultiplier = 1.2;

export const TableBody = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TableLine = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.secondary};
`;
export const ColoredText = styled.Text`
  color: ${(props) => props.color};
  font-size: ${ResponsiveSize(18)};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;
ColoredText.defaultProps = ColoredText.defaultProps || {};
ColoredText.defaultProps.maxFontSizeMultiplier = 1.2;

export const BlackText = styled.Text`
  font-size: ${ResponsiveSize(24)};
`;
BlackText.defaultProps = BlackText.defaultProps || {};
BlackText.defaultProps.maxFontSizeMultiplier = 1.2;

export const ButtonContainer = styled.View`
  margin-top: -50px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  background-color: ${(props) => props.background ? props.background : colors.secondary}
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: ${(props) => props.color};
  font-size: ${ResponsiveSize(16)};
  text-transform: uppercase;
`;

export const Modal = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  background: ${colors.white};
`;

export const ModalContainer = styled.View`
  width: 50%;
  height: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const ModalText = styled.Text`
  color: ${colors.black};
  font-family: "Roboto";
  font-size: ${ResponsiveSize(18)};
`;
ModalText.defaultProps = ModalText.defaultProps || {};
ModalText.defaultProps.maxFontSizeMultiplier = 1.2;

export const ModalInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  background: ${colors.white};
  border-width: 1px;
  border-color: ${colors.secondary};
  padding: 0 10px;
  margin-top: 10px;
`;
export const ModalButton = styled.TouchableOpacity``;
export const ModalButtonText = styled.Text`
  color: ${colors.black};
  font-family: "Roboto";
  font-size: ${ResponsiveSize(14)};
`;
ButtonText.defaultProps = ButtonText.defaultProps || {};
ButtonText.defaultProps.maxFontSizeMultiplier = 1.2;
=======
import styled from "styled-components/native";
import { colors } from "../../styles/themes";
import { ResponsiveSize } from "../../utils/responsive";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
`;

export const LoaderContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  z-index: 10;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImageContainer = styled.TouchableOpacity`
  width: 42%;
  height: 80%;
`;

export const Image = styled.Image`
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: -10px;
`;
export const HeaderLogo = styled.Image`
  width: 20%;
  height: 100%;
`;

export const Table = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: -10px;
`;

export const TableHeader = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const TableTitle = styled.Text`
  color: ${colors.black};
  font-size: ${ResponsiveSize(24)};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;
TableTitle.defaultProps = TableTitle.defaultProps || {};
TableTitle.defaultProps.maxFontSizeMultiplier = 1.2;

export const TableBody = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TableLine = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.secondary};
`;
export const ColoredText = styled.Text`
  color: ${(props: { color: any }) => props.color};
  font-size: ${ResponsiveSize(18)};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;
ColoredText.defaultProps = ColoredText.defaultProps || {};
ColoredText.defaultProps.maxFontSizeMultiplier = 1.2;

export const BlackText = styled.Text`
  font-size: ${ResponsiveSize(24)};
`;
BlackText.defaultProps = BlackText.defaultProps || {};
BlackText.defaultProps.maxFontSizeMultiplier = 1.2;

export const ButtonContainer = styled.View`
  margin-top: -50px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor ? props.backgroundColor : colors.secondary};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: ${(props: any) => props.color};
  font-size: ${ResponsiveSize(16)};
  text-transform: uppercase;
`;

export const Modal = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  background: ${colors.white};
`;

export const ModalContainer = styled.View`
  width: 60%;
  height: 60%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  background: ${colors.background};
  border-radius: 50px;
`;

export const ModalText = styled.Text`
  color: ${colors.black};
  font-family: "Roboto";
  font-size: ${ResponsiveSize(18)};
`;
ModalText.defaultProps = ModalText.defaultProps || {};
ModalText.defaultProps.maxFontSizeMultiplier = 1.2;

export const ModalInput = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  background: ${colors.white};
  border-width: 1px;
  border-color: ${colors.secondary};
  padding: 0 10px;
  margin-top: 10px;
`;
export const ModalButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;
export const ModalButton = styled.TouchableOpacity`
  width: 200px;
  align-items: center;
  border-radius: 20px;
  background: ${(props: { backgroundColor: any; }) => props.backgroundColor ? props.backgroundColor : colors.primary};
  margin-top: 20px;
`;
export const ModalButtonText = styled.Text`
  color: ${colors.white};
  font-family: "Roboto";
  font-size: ${ResponsiveSize(14)};
`;
ButtonText.defaultProps = ButtonText.defaultProps || {};
ButtonText.defaultProps.maxFontSizeMultiplier = 1.2;
>>>>>>> aa877b7 (fix: update expo files):src/pages/Reports/styles.ts
