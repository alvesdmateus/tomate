import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button,
  Switch,
  Pressable
 } from 'react-native';

import { styles } from './styles';

type Props = {
}


export default function Logo( {} : Props ) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState: Boolean) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.signUp}>
        Sign Up
      </Text>
      <Text style={styles.inputFieldText}>
        EMAIL
      </Text>
      <TextInput style={styles.inputField} value={'example@email.com'}>
       
      </TextInput>
      <Text style={styles.inputFieldText}>
        PASSWORD
      </Text>
      <TextInput style={styles.inputField} secureTextEntry={true} >
      </TextInput>
      
      <View style={styles.inputFieldFooter}>
        
        <Switch style={styles.rememberMeSwitch}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        >
          
        </Switch>
        
        <Text style={styles.rememberMe} >Remember me?</Text>

        <Text>Forgot Password?</Text>
      
      </View>

      <Pressable 
        style={styles.nextButton} 
        onPress={() => {}}
      >
        <Text style={styles.nextButtonText}>
          NEXT
        </Text>
      </ Pressable>
    </View>
  )
}