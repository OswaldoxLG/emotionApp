import React from "react";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackUserParams } from "../../navigator/UserNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { BtnRelax } from "../../components/BtnRelax";
import { VideoCard } from "../../components/VideoCard";

export const RecursosUserScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackUserParams>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
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
            isSelected={true}
          />
          <BtnRelax
            title="Respiración"
            onPress={() => navigation.replace("RelaxScreen")}
            isSelected={false}
          />
        </View>
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="c_wsIdrxxVc"
          text="Encuentra la calma en el silencio interior."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="x40fWxd8qRo"
          text="La meditación es el arte de escuchar tu alma."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="sfaorT2v2wQ"
          text="Respira profundamente y deja ir lo que no puedes controlar."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="-Mf8CP7-hYE"
          text="Un momento de meditación puede cambiar todo tu día."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="TsT6Htyobgw"
          text="La paz comienza dentro de ti."
        />
        <View style={styles.line} />
        <VideoCard
          width={300}
          height={190}
          play={false}
          videoId="fzGwFuJJk3c"
          text="La meditación no es escapar, es encontrarte contigo mismo."
        />
        <View style={styles.line} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10
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
