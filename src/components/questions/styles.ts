import styled from "styled-components/native";
import {sizes} from '../../styles/themes';
export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 90%;
`;

export const QuestionTitle = styled.Text`
  fontSize: ${sizes.title}
`;
export const AnswerContainer = styled.View`
  width: 80%;
  flex:1 ;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const AnswerTitle = styled.Text`
  fontSize: ${sizes.subtitle}
`;
