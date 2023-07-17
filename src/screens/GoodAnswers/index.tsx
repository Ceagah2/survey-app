import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/themes";
import Button from "../../components/button";
import Questions from "../../data/goodAnswers/index.json";
import QuestionComponent from "../../components/questions";
import { Container, QuestionContainer, Scroll } from "./styles";

const GoodAnswers = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <QuestionContainer>
        {Questions.map((question) => (
          <QuestionComponent
            key={question.id}
            title={question.title}
            answers={question.answers}
          />
        ))}
      </QuestionContainer>
      <Button onPress={handleNavigation} backgroundColor={colors.primary} height={50}>
        Voltar
      </Button>
    </Container>
  );
};

export default GoodAnswers;
