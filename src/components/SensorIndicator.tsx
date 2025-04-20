import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { appTheme } from "../themes/appTheme";

const { width } = Dimensions.get("window");

interface Props {
  title: string;
  value: number;
  isLoading: boolean;
  icon: "heart" | "bolt";
}

export const SensorIndicator = ({ title, value, isLoading, icon }: Props) => {
  return (
    <>
      <Text style={appTheme.nametxt}>{title}</Text>
      <View style={styles.secContainer}>
        <View style={styles.iconCon}>
          <FontAwesome
            name={icon}
            size={70}
            style={appTheme.icon}
            color="white"
          />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.title}>{icon === "heart" ? "BPM" : "GSR"}</Text>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.valueText}>{value}</Text>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconCon: {
    flex: 1,
    height: "100%",
    width: "40%",
  },
  textCon: {
    height: "100%",
    width: "60%",
  },
  secContainer: {
    backgroundColor: "rgb(255,152,0)",
    flexDirection: "row",
    width: width * 0.8,
    borderRadius: 15,
    marginBottom: 25,
    height: 120,
    padding: 10,
    elevation: 5,
    shadowColor: "blue",
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  valueText: {
    fontFamily: "sans-serif",
    fontSize: 28,
    textAlign: "center",
    color: "white",
    marginTop: 8,
    fontWeight: "bold",
  },
});
