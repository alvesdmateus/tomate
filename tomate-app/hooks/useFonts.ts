import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    'Quicksand-Light' : require('../src/assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('../src/assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('../src/assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('../src/assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-SemiBold' : require('../src/assets/fonts/Quicksand-SemiBold.ttf'),
  });
