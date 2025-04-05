import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootStackUserParams } from "../../navigator/UserNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { BtnRelax } from "../../components/BtnRelax";
import YoutubePlayer from "react-native-youtube-iframe";

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
            onPress={() => navigation.navigate("RelaxScreen")}
            isSelected={false}
          />
        </View>
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={300}
            width={300}
            play={false}
            videoId="c_wsIdrxxVc"
          />
          <Text style={styles.titleBox}>Despeja tu mente</Text>
        </View>
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
    marginBottom: 20,
  },
  videoContainer: {
    padding: 30,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 5,
  },
  titleBox:{
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  }
});
