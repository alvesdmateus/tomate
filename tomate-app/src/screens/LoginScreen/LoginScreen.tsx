import { View } from 'react-native';

import { styles } from './styles';
import Logo  from '../../components/Logo/Logo';
import LoginInput from '../../components/LoginInput/LoginInput';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Logo /> 
      <LoginInput/>
    </View>
  )
}