import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackUserParams } from "../../navigator/UserNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { BtnRelax } from "../../components/BtnRelax";
import { VideoCard } from "../../components/VideoCard";

export const RelaxScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackUserParams>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 20
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View style={styles.btnBox}>
          <BtnRelax
            title="Meditación"
            onPress={() => navigation.navigate("RecursosUserScreen")}
            isSelected={false}
          />
          <BtnRelax
            title="Respiración"
            onPress={() => navigation.navigate("RelaxScreen")}
            isSelected={true}
          />
        </View>
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="jS3tdO1MdkE"
          text="Inhala tranquilidad, exhala estrés."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="G0HypiXhdgc"
          text="Tu respiración es tu ancla en momentos difíciles."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="LZJoRGuqb7o"
          text="Respirar conscientemente es regresar al presente."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="_d5YIjqubmE"
          text="Cada respiración es una oportunidad para empezar de nuevo."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="fxZKlHH5bqI"
          text="El control de tu respiración es el control de tu mente."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="whAzwqn4ITE"
          text="Respira lento, vive despacio, siente profundo."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="hbzfDIYLJoA"
          text="Tu respiración es tu superpoder para encontrar la calma."
        />
        <View style={styles.line} />
      </ScrollView>
    </SafeAreaView>
  );
};
"jS3tdO1MdkE"
const styles = StyleSheet.create({
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  line: {
    backgroundColor: "rgb(192, 191, 191)",
    borderStyle: "solid",
    borderWidth: 0.5,
    margin: 10,
    height: 1,
    width: "75%",
    alignSelf: "center",
  },
});
