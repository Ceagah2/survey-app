import React from "react";
import { Text } from "react-native";
import Data from "../../data/badAnswers/index.json";
import {
  Container,
  AnswerContainer,
  AnswerTitle,
  QuestionTitle,
} from "./styles";

interface DataProps {
  title: string;
  answers: any;
}
const Questions = (props: DataProps) => {
  return (
    <Container>
      <QuestionTitle>{props.title}</QuestionTitle>
      {props.answers.map((answer: React.Key | null | undefined) => (
        <AnswerContainer key={answer}>
          <AnswerTitle>{answer}</AnswerTitle>
        </AnswerContainer>
      ))}
    </Container>
  );
};

export default Questions;
