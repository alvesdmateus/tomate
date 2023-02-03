import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    //alignContent: "center",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: '60%',
    flexDirection: "row",
  },
  logoText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 32,
    color: Colors.mainTextColor,
  },
})