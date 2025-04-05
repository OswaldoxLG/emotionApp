import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../themes/appTheme";

interface Props {
  title: string;
  onPress: () => void;
  isSelected: boolean;
}

export const BtnRelax = ({ title, onPress, isSelected }: Props) => {

  const gradientColors: any = !isSelected
    ? ["#ffffff", "#ffc167"]
    : ["#ffffff", "#007BFF"];

  return (
    <TouchableOpacity onPress={onPress} style={style.mainContainer}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
        style={appTheme.inputGradient}
      />
      <View style={style.btnContainer}>
        <Text style={style.btnTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 0.5,
  },
  btnContainer: {
    margin: 10,
    padding: 5,
    width: 120,
    height: 35,
    justifyContent: "center",
  },
  btnTitle: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
