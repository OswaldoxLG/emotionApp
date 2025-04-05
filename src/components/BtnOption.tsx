import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../themes/appTheme";

interface BtnForm {
  title: string;
  state: string;
  action: () => void;
}

export const BtnOption = ({ title, state, action }: BtnForm) => {
  const isSelected =
    (title === "Femenino" && state === "F") ||
    (title === "Masculino" && state === "M") ||
    (title === "Administrador" && state === "admin") ||
    (title === "Usuario" && state === "usuario");

  const gradientColors: any = isSelected
    ? ["#ffffff", "#007BFF"]
    : ["#ffffff", "#ffc167"];

  return (
    <TouchableOpacity onPress={action} style={style.mainContainer}>
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
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
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
