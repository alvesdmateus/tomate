import { View, Text } from 'react-native';

import { LogoImg } from './LogoImg/LogoImg';
import { LogoText } from './LogoText/LogoText';
import { styles } from './styles';

type Props = {
}

export function Logo( {} : Props ) {
  return (
    <View style={styles.container}>
      <LogoImg/>
      <LogoText/>
    </View>
  )
}