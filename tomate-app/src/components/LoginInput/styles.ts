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
    paddingVertical: 5,
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    alignContent: 'flex-start',
    color: Colors.mainTextColor,
  },
  inputField: {
    height: '9%',
    color: Colors.mainTextColor,
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: Colors.inputFieldColor,
    borderRadius: 5
  },
  inputFieldFooter: {
    alignItems: 'center',
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rememberMe: {
    color : Colors.mainTextColor,
  },
  rememberMeSwitch:{},
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