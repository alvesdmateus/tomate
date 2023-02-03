import { View, Text } from 'react-native';

import { styles } from './styles';
import SVGImg from '../../assets/logo.svg';

type Props = {
}

export default function Logo( {} : Props ) {
  return (
    <View style={styles.container}>
      
      <SVGImg
        width={42}
        height={42}
      />
      <Text style={styles.logoText}>t.o.mate</Text>
    </View>
  )
}