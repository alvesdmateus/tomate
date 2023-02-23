import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  container:{
    paddingVertical: 25
  },
  fineLine: {
    paddingHorizontal: 10,
    width: 290,
    height: 6,
    backgroundColor: Colors.secondaryBgColor,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  orBox: {
    borderRadius: 11.5,
    paddingHorizontal: 10,
    width: 64,
    height: 64,
  },
  logoSign: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})