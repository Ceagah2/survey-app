import styled from 'styled-components/native';
import { colors } from '../../styles/themes';
import { ResponsiveSize } from '../../utils/responsive';

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
`;
export const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImageContainer = styled.TouchableOpacity`
  width: 50%;
  height: 80%;
  background: transparent;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
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
  background: ${colors.background};
`;
export const HeaderLogo = styled.Image`
  width: 20%;
  height: 100%;
`;

export const DescriptionBox = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DescriptionText = styled.Text`
  color: ${colors.black};
  font-family: 'Roboto';
  font-size: ${ResponsiveSize(18)};
  margin-right: 0;
`;
DescriptionText.defaultProps = DescriptionText.defaultProps || {};
DescriptionText.defaultProps.maxFontSizeMultiplier = 1.2;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  margin-top: -25px;
  background: ${colors.background};
`;
export const Button = styled.TouchableOpacity`
  width: 17%;
  height: 100%;
  border-radius: 100px;
  background-color: ${(props: { backgroundColor: any }) =>
    props.backgroundColor};
`;

export const Modal = styled.View`
  width: 100%;
  height: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  background: ${colors.white};
`;

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${colors.background};
`;

export const ModalText = styled.Text`
  color: ${colors.black};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: ${ResponsiveSize(20)};
  padding-top: 20%;
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
  font-size: ${ResponsiveSize(16)};
`;
ModalInput.defaultProps = ModalInput.defaultProps || {};
ModalInput.defaultProps.maxFontSizeMultiplier = 1.2;

export const ModalButtonContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;
export const ModalButton = styled.TouchableOpacity`
  background: ${(props: { backgroundColor: any }) =>
    props.backgroundColor ? props.backgroundColor : colors.primary};
  width: 200px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: ${(props: { color: any }) =>
    props.color ? props.color : colors.black};
  font-family: 'Roboto';
  font-size: ${ResponsiveSize(16)};
  font-weight: bold;
`;
ButtonText.defaultProps = ButtonText.defaultProps || {};
ButtonText.defaultProps.maxFontSizeMultiplier = 1.2;
