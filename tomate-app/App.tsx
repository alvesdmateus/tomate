import { StyleSheet, Text, View , } from 'react-native';
import { useCallback } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import { Colors } from './src/constants'

//import useFonts from './hooks/useFonts'; 

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
     'Quicksand-Light' : require('./src/assets/fonts/Quicksand-Light.ttf'),
     'Inter-Bold' : require('./src/assets/fonts/Inter-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
     if (fontsLoaded) {
       await SplashScreen.hideAsync();
     }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
     return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBgColor ,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
