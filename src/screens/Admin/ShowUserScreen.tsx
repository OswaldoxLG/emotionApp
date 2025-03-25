import React from "react";
import { View, Text } from 'react-native';
import { appTheme } from "../../themes/appTheme";

export const ShowUserScreen = () => {
  return (
    <View style={appTheme.globalContainer}>
      <Text style={appTheme.title}>Lista de Usuarios</Text>
    </View>
  );
}