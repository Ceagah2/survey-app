import React from 'react';
import {
  AnswerContainer,
  AnswerTitle,
  Container,
  QuestionTitle,
} from './styles';

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
