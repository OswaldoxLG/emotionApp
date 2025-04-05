import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

export const InfoUserScreen = () => {

  return(
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
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          Información del Usuario
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}