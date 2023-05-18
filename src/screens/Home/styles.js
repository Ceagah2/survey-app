import styled from 'styled-components/native';
import { ResponsiveSize } from '../../utils/responsive';
import { colors, fonts, spacing, sizes } from '../../styles/themes';

export const Container = styled.SafeAreaView`
  flex: 1;
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
  flex:1;
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
  background-color: ${(props) => props.background ? props.background : colors.background}
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
  font-family: 'Roboto';
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
export const ButtonText = styled.Text`
  color: ${colors.black};
  font-family: 'Roboto';
  font-size: ${ResponsiveSize(14)};
`;
ButtonText.defaultProps = ButtonText.defaultProps || {};
ButtonText.defaultProps.maxFontSizeMultiplier = 1.2;