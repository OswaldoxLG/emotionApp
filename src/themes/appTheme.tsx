import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
  globalMarging:{
    marginHorizontal: 10,
    marginTop: 25,
    borderRadius: 10
  },
  globalContainer:{
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title:{
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 38, 
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 10,  
    marginHorizontal: 15,
    marginTop: 10
  },
  subtitle:{
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 18, 
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 30,  
    marginHorizontal: 15,
  },
  nametxt:{
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 20, 
    fontWeight: "700",
    fontStyle: 'italic',
    textAlign: "center",
    marginBottom: 15,  
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
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: "700",
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
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
  iconDrawer:{
    position: "absolute",
    bottom: 10,
    left: 0,
    opacity: 1,
  },
  avatar:{
    height: 200,
    width: 200,
    borderColor: "black",
    borderWidth: 1.5, 
    borderRadius: 100,
  },
  menuContainer:{
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuBtn:{ 
    width: '100%',
  },
  texBtn:{
    fontSize: 18,
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    color:"black",
    fontWeight: "400",
    marginTop: 10,
    marginLeft: 35,
    marginBottom: 10
  }
});