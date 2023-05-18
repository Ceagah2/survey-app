import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Rubackinho from "../../assets/Rubackinho_02.png";
import Logo from "../../assets/logo.png";
import { colors } from "../../styles/themes";
import {
  Container,
  Header,
  HeaderLogo,
  Content,
  ImageContainer,
  Image,
  Table,
  TableHeader,
  TableTitle,
  TableBody,
  TableLine,
  ColoredText,
  BlackText,
  ButtonContainer,
  Button,
  ButtonText,
  Modal,
  ModalText,
  ModalInput,
  ModalButtonText,
  ModalContainer,
  ModalButton,
} from "./styles";

const Reports = () => {
  const [report, setReport] = useState([]);
  const [redVotes, setRedVotes] = useState();
  const [yellowVotes, setYellowVotes] = useState();
  const [greenVotes, setGreenVotes] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    getVotes();
  }, []);

  const getVotes = async () => {
    setIsLoading(true);
    const redVotes = await AsyncStorage.getItem("@redVote");
    const yellowVotes = await AsyncStorage.getItem("@yellowVote");
    const greenVotes = await AsyncStorage.getItem("@greenVote");

    setRedVotes(redVotes);
    setYellowVotes(yellowVotes);
    setGreenVotes(greenVotes);
    const numOfRedVotes = parseInt(redVotes);
    const numOfYellowVotes = parseInt(yellowVotes);
    const numOfGreenVotes = parseInt(greenVotes);
    const allVotes = [numOfRedVotes + numOfYellowVotes + numOfGreenVotes];
    setReport(allVotes);
    setIsLoading(false);
  };

  const handleModalOpen = () => {
    Alert.alert("Confirmação", "Tem certeza que deseja deletar os dados ?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Deletar",
        onPress: () => setIsModalOpen(true),
      },
    ]);
  };
  const ResetVotes = () => {
    if (password === "rubackinho") {
      AsyncStorage.removeItem("@redVote");
      AsyncStorage.removeItem("@yellowVote");
      AsyncStorage.removeItem("@greenVote");
      AsyncStorage.setItem("@redVote", "0");
      AsyncStorage.setItem("@yellowVote", "0");
      AsyncStorage.setItem("@greenVote", "0");
      getVotes();
      setIsModalOpen(false);
    } else {
      Alert.alert(
        "Senha incorreta",
        "Caso tenha esquecido sua senha, entre em contato com o desenvolvedor."
      );
    }
  };

  return (
    <Container>
      <Header>
        <HeaderLogo source={Logo} />
      </Header>
      {isModalOpen && (
        <Modal>
          <ModalContainer>
            <ModalText>
              Por favor digite a senha, para acessar o relatório:
            </ModalText>
            <ModalInput
              placeholder="Senha"
              name="password"
              onChangeText={(t) => setPassword(t)}
              value={password}
              secureTextEntry
            />
            <ModalButton onPress={() => ResetVotes()}>
              <ModalButtonText>Acessar</ModalButtonText>
            </ModalButton>
          </ModalContainer>
        </Modal>
      )}
      <Content>
        <Table>
          <TableHeader>
            <TableTitle> Relatório mensal de atendimento</TableTitle>
          </TableHeader>
          <TableBody>
            <TableLine>
              <ColoredText color={colors.red}>Atendimento RUIM </ColoredText>
              <BlackText>{redVotes}</BlackText>
            </TableLine>
            <TableLine>
              <ColoredText color={colors.yellow}>Atendimento MÉDIO</ColoredText>
              <BlackText>{yellowVotes}</BlackText>
            </TableLine>
            <TableLine>
              <ColoredText color={colors.green}>Atendimento ÓTIMO</ColoredText>
              <BlackText>{greenVotes}</BlackText>
            </TableLine>
            <TableLine>
              <ColoredText color={colors.black}>
                Total de Atendimentos
              </ColoredText>
              <BlackText>{report}</BlackText>
            </TableLine>
          </TableBody>
        </Table>
        <ImageContainer>
          <Image source={Rubackinho} />
        </ImageContainer>
      </Content>
      <ButtonContainer>
        <Button
          backgroundColor={colors.secondary}
          onPress={() => navigation.navigate("Home")}
        >
          <ButtonText color={colors.black}>Voltar</ButtonText>
        </Button>
        <Button
          backgroundColor={colors.secondary}
          onPress={() => handleModalOpen()}
        >
          <ButtonText color={colors.black}>Resetar Relatório</ButtonText>
        </Button>
        {/* <Button backgroundColor={colors.secondary} onPress={() => SaveReport()}>
          <ButtonText color={colors.black}>Salvar relatório</ButtonText>
        </Button> */}
      </ButtonContainer>
    </Container>
  );
};

export default Reports;
