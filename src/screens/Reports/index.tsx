import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Rubackinho from '../../assets/Rubackinho_01.png';
import Logo from '../../assets/logo.png';
import { colors } from '../../styles/themes';
import {
  BlackText,
  Button,
  ButtonContainer,
  ButtonText,
  ColoredText,
  Container,
  Content,
  Header,
  HeaderLogo,
  Image,
  ImageContainer,
  Modal,
  ModalButton,
  ModalButtonContainer,
  ModalButtonText,
  ModalContainer,
  ModalInput,
  ModalText,
  Table,
  TableBody,
  TableHeader,
  TableLine,
  TableTitle,
} from './styles';

const Reports = () => {
  const [report, setReport] = useState([]);
  const [redVotes, setRedVotes] = useState<string>();
  const [yellowVotes, setYellowVotes] = useState<string>();
  const [greenVotes, setGreenVotes] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>();

  const navigation = useNavigation();

  useEffect(() => {
    getVotes();
  }, []);

  const getVotes = async () => {
    setIsLoading(true);
    const redVotes = await AsyncStorage.getItem('@redVote');
    const yellowVotes = await AsyncStorage.getItem('@yellowVote');
    const greenVotes = await AsyncStorage.getItem('@greenVote');
    let numOfRedVotes;
    let numOfYellowVotes;
    let numOfGreenVotes;

    redVotes ? setRedVotes(redVotes) : null;
    yellowVotes ? setYellowVotes(yellowVotes) : null;
    greenVotes ? setGreenVotes(greenVotes) : null;

    redVotes ? (numOfRedVotes = parseInt(redVotes)) : null;
    yellowVotes ? (numOfYellowVotes = parseInt(yellowVotes)) : null;
    greenVotes ? (numOfGreenVotes = parseInt(greenVotes)) : null;

    const allVotes = [numOfRedVotes + numOfYellowVotes + numOfGreenVotes];
    setReport(allVotes);
    setIsLoading(false);
  };

  const handleModalOpen = () => {
    Alert.alert('Confirmação', 'Tem certeza que deseja deletar os dados ?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Deletar',
        onPress: () => setIsModalOpen(true),
      },
    ]);
  };
  const ResetVotes = () => {
    if (password === 'rubackinho') {
      AsyncStorage.removeItem('@redVote');
      AsyncStorage.removeItem('@yellowVote');
      AsyncStorage.removeItem('@greenVote');
      AsyncStorage.setItem('@redVote', '0');
      AsyncStorage.setItem('@yellowVote', '0');
      AsyncStorage.setItem('@greenVote', '0');
      getVotes();
      setIsModalOpen(false);
    } else {
      Alert.alert(
        'Senha incorreta',
        'Caso tenha esquecido sua senha, entre em contato com o desenvolvedor.',
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
              Por favor digite a senha, para DELETAR o relatório:
            </ModalText>
            <ModalInput
              placeholder="Senha"
              name="password"
              onChangeText={(t: string) => setPassword(t)}
              value={password}
              secureTextEntry
            />
            <ModalButtonContainer>
              <ModalButton onPress={() => setIsModalOpen(!isModalOpen)}>
                <ButtonText color={colors.white}>Fechar</ButtonText>
              </ModalButton>

              <ModalButton
                onPress={() => ResetVotes()}
                backgroundColor={colors.red}
              >
                <ModalButtonText>DELETAR</ModalButtonText>
              </ModalButton>
            </ModalButtonContainer>
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
          onPress={() => navigation.navigate('Home')}
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
