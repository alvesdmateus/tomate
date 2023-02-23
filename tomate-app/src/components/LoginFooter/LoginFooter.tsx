import { View, Text } from 'react-native';

import { styles } from './styles';
import FBLogo from '../../assets/fb-logo.svg';
import GGLogo from '../../assets/google-logo.svg';

export default function LoginFooteer() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.fineLine}></View>
        <View>
          <Text style={styles.orBox}>
            OR
          </Text>
        </View>
        <View style={styles.fineLine}></View>

      </View>

      <View style={styles.logoSign}>
        <FBLogo
          style={{
            paddingHorizontal: 10
          }}
          width={56}
          height={56}
        >
        </FBLogo>
    
        <GGLogo
          style={{
            paddingHorizontal: 10
          }}
          width={56}
          height={56}
        >
        </GGLogo>

      </View>

      <View>
        <Text>
          Already a user?
        </Text>
        <Text>
          Log in
        </Text>
      </View>
    </View>
  )
}