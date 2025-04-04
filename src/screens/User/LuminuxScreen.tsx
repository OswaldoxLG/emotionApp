import React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { InfoBox } from "../../components/InfoBox";

const { width } = Dimensions.get("window");
export const LuminuxUserScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>
        <ImageBackground
          source={require("../../../assets/fondo1.jpg")}
          style={styles.img}
        >
          <View style={styles.TxtFront}>
            <Text
              style={{
                ...styles.mainTxt,
                ...styles.textBase,
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
        <InfoBox
          iconName="heartbeat"
          title="Cuidate"
          description="Monitorea tus emociones en tiempo real y recibe herramientas personalizadas para mantener tu equilibrio mental."
        />
        <InfoBox
          iconName="sun-o"
          title="Respira Tranquilo"
          description="Cuando el estrés aparezca, nuestra pulsera te guiará con ejercicios de respiración para recuperar la calma al instante."
        />
        <InfoBox
          iconName="bar-chart"
          title="Conócete más"
          description="Analiza tus patrones de estrés y ansiedad para atender qué los desencadena y cómo manejarlos de forma saludable."
        />
        <InfoBox
          iconName="leaf"
          title="Vive en equilibrio"
          description="Combina tecnología y bienestar para enfrentar cada día con serenidad, energía y control emocional."
        />
        <View style={styles.box3}>
          <View style={styles.titlePart3}>
            <Image
              style={styles.img2}
              source={require("../../../assets/female-tourists.jpg")}
              resizeMode="cover"
            />
            <Text style={{ ...styles.textBase, ...styles.titleTxt }}>
              ¿Por qué debemos cuidar nuestra salud mental?
            </Text>
          </View>
          <Text
            style={{
              ...styles.subTxt,
              ...styles.textBase,
              textAlign: "justify",
            }}
          >
            Una mente equilibrada nos permite enfrentar desafíos con
            resiliencia, disfrutar de una vida plena y mantener una conexión
            saludable con nosotros mismos y los demás. Invertir en salud mental
            no es un lujo, es una necesidad.
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
  img: {
    width: "100%",
    height: width * 0.9,
  },
  TxtFront: {
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
    textAlign: "center",
  },
  outTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
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
  img2: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 10,
  },
  box3: {
    flexDirection: "column",
    borderRadius: 20,
    borderColor: "rgb(192, 191, 191)",
    borderWidth: 0.5,
    backgroundColor: "white",
    marginHorizontal: 30,
    marginBottom: 25,
    elevation: 15,
    padding: 10,
  },
  titlePart3: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  subTxt: {
    color: "gray",
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
});
