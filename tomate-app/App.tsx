import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';
import { Colors } from './src/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBgColor ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
