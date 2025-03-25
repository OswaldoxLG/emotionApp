import React from "react";
import { View, Text } from 'react-native';
import { BtnNav } from "../../components/BtnNav";
import { SendButton } from "../../components/SendButton";
import { useNavigation } from "@react-navigation/native";
import { appTheme } from "../../themes/appTheme";
export const IndexUserScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={appTheme.globalContainer}>
      <Text style={appTheme.title}>Lista de Usuarios</Text>
        <SendButton
          title='CREAR USUARIO'
          background='rgb(22, 101, 21)'
          onPress={() => { navigation.navigate('FormUserScreen')}}
        />
          <BtnNav
            title="<"
            position="bottom_left"
            onPress={() => { navigation.goBack() }}
          />
    </View>
  );
}