import React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
export const LuminuxUserScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>
        <ImageBackground
          source={require("../../../assets/fondo1.jpg")}
          style={styles.img}
        >
          <View style={styles.overlay}>
            <Text
              style={{
                ...styles.mainTxt,
                ...styles.textBase,
                color: "white",
              }}
            >
              E-Motion: Tu calma, latido a latido.
            </Text>
            <Text
              style={{
                ...styles.textBase,
                ...styles.subtitle,
              }}
            >
              Tecnología que detecta el estrés y te guía hacia la tranquilidad.
              Porque tu bienestar emocional siempre importa.
            </Text>
          </View>
        </ImageBackground>
        <Text style={{ ...styles.outTitle, ...styles.textBase }}>
          Te ayudaremos a sentirte mejor.
        </Text>
        <View style={styles.infoBox}>
          <View style={styles.titlePart}>
            <FontAwesome
              name="heartbeat"
              size={35}
              color="black"
              style={styles.icon}
            />
            <Text style={{ ...styles.textBase, ...styles.titleTxt }}>
              Cuidate
            </Text>
          </View>
          <Text
            style={{
              ...styles.subTxt,
              ...styles.textBase,
              textAlign: "justify",
            }}
          >
            Monitorea tus emociones en tiempo real y recibe herramientas
            personalizadas para mantener tu equilibrio mental.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    ...StyleSheet.absoluteFillObject,
  },
  img: {
    width: "100%",
    height: width * 0.9,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(42, 36, 36, 0.25)",
  },
  textBase: {
    fontFamily: "sans-serif",
    color: "black",
    textAlign: "center",
  },
  outTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
  },
  infoBox: {
    flexDirection: "column",
    borderRadius: 20,
    borderColor: "rgb(192, 191, 191)",
    borderWidth: 0.5,
    backgroundColor: "white",
    marginHorizontal: 30,
    elevation: 20,
    padding: 10,
  },
  icon: {
    marginTop: 10,
    marginBottom: 10,
  },
  titlePart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    marginLeft: 30,
    alignItems: "center",
  },
  mainTxt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  subTxt: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
