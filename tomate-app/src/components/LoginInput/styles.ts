import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '80%',
    height: '70%',
  },
  signUp: {
    fontFamily: 'Inter-Bold',
    paddingVertical: 10,
    fontSize: 16,
    color: Colors.mainTextColor,
    alignContent: 'flex-start',
  },
  inputFieldText: {
    paddingVertical: 10,
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    alignContent: 'flex-start',
    color: Colors.mainTextColor,
  },
  inputField: {
    color: Colors.mainTextColor,
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: Colors.inputFieldColor,
    borderRadius: 5
  },
  inputFieldFooter: {
    fontSize: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberMe:{
    color : Colors.secondaryBgColor,

  },
  rememberMeSwitch:{
    
  },
  nextButton: {
    backgroundColor: Colors.secondaryBgColor,
    width: '100%',
    height: '20%',
    boxSizing: 'border-box',  
    alignItems: 'center',
    justifyContent: 'center',  
    borderRadius: 14,
  },
  nextButtonText: {
    color: Colors.mainTextColor,
    fontSize: 30,
    fontFamily: 'Inter-Bold',
  }
})