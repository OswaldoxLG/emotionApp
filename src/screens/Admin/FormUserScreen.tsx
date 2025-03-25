import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SendButton } from "../../components/SendButton";
import { DefaultBtn } from "../../components/DefaultBtn";
import { ScrollView } from "react-native-gesture-handler";
import { DateInput } from "../../components/DateInput";
import { InputField } from "../../components/InputField";
import { BtnNav } from "../../components/BtnNav";
import { appTheme } from "../../themes/appTheme";
export const FormUserScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={appTheme.globalContainer}>
          <Text style={{
            ...appTheme.title,
            marginTop: 40,
            textAlign: 'center'
          }}
          >
            REGISTRAR USUARIO
          </Text>
          <InputField
            iconName="user"
            placeholder="Username"
            keyboardType="default"
          />
          <InputField
            iconName="user"
            placeholder="Nombre"
            keyboardType="default"
          />
          <InputField
            iconName="user"
            placeholder="Apellido Paterno"
            keyboardType="default"
          />
          <InputField
            iconName="user"
            placeholder="Apellido Materno"
            keyboardType="default"
          />
          <InputField
            iconName="phone"
            placeholder="Telefono"
            keyboardType="numeric"
          />
          
          <DateInput
            iconName="calendar"
            onChange={() => {}}
          />

          <DefaultBtn
            title="Sube una foto"
            onPress={() => {}}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: "600",
              color: 'black',
            }}
          >
            Genero
          </Text>

          <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent:'center' }}>
          <DefaultBtn
            title="Femenino"
          />
          <DefaultBtn
            title="Maculino"
          />
          <DefaultBtn
            title="Otro"
          />
          </View>
          <View style={{ marginBottom: 40 }}>
          <SendButton
            title='ENVIAR'
            background='rgb(21, 63, 101)'
            onPress={() => {}}
          />
          <BtnNav
            title="<"
            position="bottom_left"
            onPress={() => { navigation.goBack() }}
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

