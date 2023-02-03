import { View } from 'react-native';

import { styles } from './styles';
import { Logo }  from '../../components/Logo/Logo';

type Props = {
}

export function LoginScreen( {} : Props ) {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  )
}