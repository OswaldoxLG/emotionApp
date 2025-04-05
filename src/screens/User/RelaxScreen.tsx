import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { RootStackUserParams } from "../../navigator/UserNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { BtnRelax } from "../../components/BtnRelax";
import YoutubePlayer from "react-native-youtube-iframe";

interface RelaxScreenProps {}

export const RelaxScreen = (props: RelaxScreenProps) => {
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
            isSelected={false}
          />
          <BtnRelax
            title="Respiración"
            onPress={() => navigation.navigate("RelaxScreen")}
            isSelected={true}
          />
        </View>
        <View style={styles.videoContainer}>
          <View style={styles.video}>
          <YoutubePlayer
            height={300}
            width={300}
            play={false}
            videoId="jS3tdO1MdkE"
          />
          <Text style={styles.titleBox}>Despeja tu mente</Text>
          </View>
          <View style={styles.line}></View>
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
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 20,
    height: 400,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#fff",
    margin: 10,
  },
  video:{

  },
  titleBox: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  line:{
    backgroundColor: 'black'
  }
});
