//import Logo from '../../../assets/Logo.svg';
import { View } from 'react-native';
import SVGImg from '../../../assets/logo.svg';

export function LogoImg() {
  return(
    <View>
      <SVGImg
        width={42}
        height={42}
    />
    </View>
  )
}