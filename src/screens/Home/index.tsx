import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Rubackinho from '../../assets/Rubackinho_01.png';
import Logo from '../../assets/logo.png';
import Button from '../../components/button';
import { colors } from '../../styles/themes';
import {
  ButtonContainer,
  ButtonText,
  Container,
  Content,
  DescriptionBox,
  DescriptionText,
  Header,
  HeaderLogo,
  Image,
  ImageContainer,
  Modal,
  ModalButton,
  ModalButtonContainer,
  ModalContainer,
  ModalInput,
  ModalText,
} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const [redVote, setRedVote] = useState(0);
  const [yellowVote, setYellowVote] = useState(0);
  const [greenVote, setGreenVote] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    const verify = await AsyncStorage.getItem('@verify');
    if (!verify) {
      await AsyncStorage.setItem('@verify', 'true');
      await AsyncStorage.setItem('@redVote', '0');
      await AsyncStorage.setItem('@yellowVote', '0');
      await AsyncStorage.setItem('@greenVote', '0');
    }
  };

  const handleRedVote = () => {
    AsyncStorage.getItem('@verify').then((verify) => {
      if (verify === null) {
        AsyncStorage.setItem('@verify', 'true');
      }
    });
    setRedVote(redVote + 1);
    AsyncStorage.getItem('@redVote').then((value) => {
      if (value) {
        AsyncStorage.setItem('@redVote', `${parseInt(value, 10) + 1}`);
      } else {
        AsyncStorage.setItem('@redVote', '1');
      }
    });
    Alert.alert(
      'Obrigada !',
      'Gostaria de responder algumas rápidas perguntas para melhorar o atendimento?',
      [
        {
          text: 'Sim',
          onPress: () => navigation.navigate('BadAnswers'),
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const handleYellowVote = () => {
    AsyncStorage.getItem('@verify').then((verify) => {
      if (verify === null) {
        AsyncStorage.setItem('@verify', 'true');
      }
    });
    setYellowVote(yellowVote + 1);
    AsyncStorage.getItem('@yellowVote').then((value) => {
      if (value) {
        AsyncStorage.setItem('@yellowVote', `${parseInt(value, 10) + 1}`);
      } else {
        AsyncStorage.setItem('@yellowVote', '1');
      }
    });
    Alert.alert(
      'Obrigada !',
      'Gostaria de responder algumas rápidas perguntas para melhorar o atendimento?',
      [
        {
          text: 'Sim',
          onPress: () => navigation.navigate('BadAnswers'),
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const handleGreenVote = () => {
    AsyncStorage.getItem('@verify').then((verify) => {
      if (verify === null) {
        AsyncStorage.setItem('@verify', 'true');
      }
    });
    setGreenVote(greenVote + 1);
    AsyncStorage.getItem('@greenVote').then((value) => {
      if (value) {
        AsyncStorage.setItem('@greenVote', `${parseInt(value, 10) + 1}`);
      } else {
        AsyncStorage.setItem('@greenVote', '1');
      }
    });
    Alert.alert(
      'Obrigada !',
      'Gostaria de responder algumas rápidas perguntas para melhorar o atendimento?',
      [
        {
          text: 'Sim',
          onPress: () => navigation.navigate('GoodAnswers'),
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const handlePasswordEntry = () => {
    if (password === 'rubackinho') {
      setIsModalOpen(false);
      navigation.navigate('Reports');
    } else {
      Alert.alert(
        'Senha incorreta !',
        'Caso tenha esquecido sua senha, entre em contato com o desenvolvedor.',
      );
    }
  };

  return (
    <Container>
      <Header>
        <HeaderLogo source={Logo} />
      </Header>
      <Content>
        <ImageContainer onPress={() => setIsModalOpen(true)}>
          <Image source={Rubackinho} />
        </ImageContainer>
        {isModalOpen && (
          <Modal>
            <ModalContainer>
              <ModalText>
                Por favor digite a senha, para acessar o relatório:
              </ModalText>
              <ModalInput
                placeholder="Senha"
                name="password"
                onChangeText={(t: string) => setPassword(t)}
                value={password}
                secureTextEntry
              />
              <ModalButtonContainer>
                <ModalButton onPress={() => handlePasswordEntry()}>
                  <ButtonText>Acessar</ButtonText>
                </ModalButton>
                <ModalButton
                  onPress={() => setIsModalOpen(!isModalOpen)}
                  backgroundColor={colors.red}
                >
                  <ButtonText color={colors.white}>Fechar</ButtonText>
                </ModalButton>
              </ModalButtonContainer>
            </ModalContainer>
          </Modal>
        )}
        <DescriptionBox>
          <DescriptionText>
            Por favor, escolha uma das opções abaixo, para votar no nosso
            atendimento.
          </DescriptionText>
          <DescriptionText>
            Atender cada vez melhor é a nossa meta. Nos ajude a alcança-la
          </DescriptionText>
        </DescriptionBox>
      </Content>
      <ButtonContainer>
        <Button backgroundColor={colors.red} onPress={() => handleRedVote()} />
        <Button
          backgroundColor={colors.yellow}
          onPress={() => handleYellowVote()}
        />
        <Button
          backgroundColor={colors.green}
          onPress={() => handleGreenVote()}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Home;
