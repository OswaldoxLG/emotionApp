import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  iconName: keyof typeof FontAwesome.glyphMap;
  title: string;
  description: string;
}
export const InfoBox = ({ iconName, title, description }: Props) => (
  <View style={styles.infoBox}>
    <View style={styles.titlePart}>
      <FontAwesome name={iconName} size={35} color="#70bdf2" style={styles.icon} />
      <Text style={{ ...styles.textBase, ...styles.titleTxt }}>{title}</Text>
    </View>
    <Text style={{ ...styles.textBase, ...styles.subTxt }}>
      {description}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  textBase: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    marginTop: 10,
  },
  infoBox: {
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
  icon: {
    marginTop: 10,
    marginBottom: 10,
  },
  titlePart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
    marginLeft: 30,
    alignItems: "center",
  },
  subTxt: {
    color: "gray",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  }
})