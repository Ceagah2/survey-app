import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

interface AlertProps {
  param: string;
}
const AlertNav = (props: AlertProps) => {
  const navigation = useNavigation();

  Alert.alert(
    'Obrigada !',
    'Gostaria de responder algumas rápidas perguntas para melhorar o atendimento?',
    [
      {
        text: 'Sim',
        onPress: () => console.log(props.param),
        // onPress: () => navigation.navigate(props.param),
      },
      {
        text: 'Não',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
  );
};

export default AlertNav;
