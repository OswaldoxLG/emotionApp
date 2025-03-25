import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
  globalMarging:{
    marginHorizontal: 10,
    marginTop: 30,
    borderRadius: 10
  },
  globalContainer:{
    alignItems: "center",
    backgroundColor: "rgb(	237, 244, 254)",
    flex: 1,
    justifyContent: "center",
  },
  title:{
    color: "rgb(21, 63, 101)",
    fontFamily: "sans-serif",
    fontSize: 38, 
    fontWeight: "bold",
    marginBottom: 10,  
    marginHorizontal: 15,
    marginTop: 10
  },
  subtitle:{
    color: "rgb(21, 63, 101)",
    fontFamily: "sans-serif",
    fontSize: 18, 
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 30,  
    marginHorizontal: 15,
  },
  inputContainer: {
    position: 'relative',
    height: 60,
    width: 280,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  inputGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  gradientInput: {
    textDecorationLine: "none",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: 'black',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "black",
    width: '100%',
    height: '100%',
  },
  icon:{
    position: "absolute",
    bottom: 20,
    left: 20,
    opacity: 1,
  },
  avatar:{
    height: 200,
    width: 200,
    borderColor: "white",
    borderWidth: 5, 
    borderRadius: 100,
  },
  menuContainer:{
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuBtn:{
    marginVertical: 10,
  },
  texBtn:{
    fontSize: 20,
    color:"black",
    fontWeight: "bold"
  }
});