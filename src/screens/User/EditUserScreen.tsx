import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { RootStackUserParams } from "../../navigator/UserNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { SendButton } from "../../components/SendButton";
import { DefaultBtn } from "../../components/DefaultBtn";
import { InputField } from "../../components/InputField";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useFormOneUser } from "../../hooks/useFormOneUser";
import { BtnOption } from "../../components/BtnOption";
import { appTheme } from "../../themes/appTheme";

interface Props
  extends StackScreenProps<RootStackUserParams, "EditUserScreen"> {}

export const EditUserScreen = ({ navigation, route }: Props) => {

  const { id_user } = route.params.user;
  const { state, handleInputChange, handleSubmit } = useFormOneUser({ id_user: id_user}); 

  useEffect(() => {
    const user = route.params?.user;
    // console.log("Datos recibidos en EditUserScreen:", user);
    if (user) {
      handleInputChange("id_user", user.id_user);
      handleInputChange("username", user.username);
      handleInputChange("name", user.name);
      handleInputChange("lastname", user.lastname);
      handleInputChange("email", user.email);
      handleInputChange("phone", user.phone);
      handleInputChange("sex", user.sex);
      handleInputChange("image", user.image);
    }
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permiso requerido",
          "Debes otorgar el permiso para acceder a la galería"
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
      //allowsMultipleSelection: true
    });
    !result.canceled &&
      (() => {
        convertImageToBase64(result.assets[0].uri);
      })();
  };

  const convertImageToBase64 = async (imageUri: string) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      handleInputChange("image", base64);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={appTheme.globalContainer}>
          <Text
            style={{
              ...appTheme.title,
              marginTop: 40,
              textAlign: "center",
            }}
          >
            ACTUALIZAR PERFIL
          </Text>

          {state.id_user !== ""  && (
            <Image
              style={{ ...appTheme.avatar, marginBottom: 20, marginTop: 20 }}
              source={{ uri: `data:image/jpeg;base64,${state.image}` }}
              resizeMode="cover"
            />
          )}
          <InputField
            value={state.username}
            onChangeText={(text) => handleInputChange("username", text)}
            iconName="user"
            placeholder="Username"
            keyboardType="default"
          />
          <InputField
            value={state.name}
            onChangeText={(text) => handleInputChange("name", text)}
            iconName="user"
            placeholder="Nombre"
            keyboardType="default"
          />
          <InputField
            value={state.lastname}
            onChangeText={(text) => handleInputChange("lastname", text)}
            iconName="user"
            placeholder="Apellidos"
            keyboardType="default"
          />
          <InputField
            value={state.email}
            onChangeText={(text) => handleInputChange("email", text)}
            iconName="envelope"
            placeholder="Correo"
            keyboardType="email-address"
          />
          <InputField
            value={state.password}
            onChangeText={(text) => handleInputChange("password", text)}
            iconName="lock"
            placeholder="Contraseña"
            keyboardType="default"
          />
          <InputField
            value={state.phone}
            onChangeText={(text) => handleInputChange("phone", text)}
            iconName="phone"
            placeholder="Telefono"
            keyboardType="numeric"
          />

          <Text style={styles.texto}>Sexo</Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <BtnOption
              state={state.sex}
              title="Femenino"
              action={() => handleInputChange("sex", "F")}
            />
            <BtnOption
              state={state.sex}
              title="Masculino"
              action={() => handleInputChange("sex", "M")}
            />
          </View>

          {/* <Text style={styles.texto}>imagen</Text> */}

          <DefaultBtn title="Foto" onPress={pickImage} />

          <View style={{ marginBottom: 20, flexDirection: "row" }}>
            <SendButton
              title={"Actualizar"}
              background="rgb(255,152,0)"
              onPress={() => {
                handleSubmit();
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  texto: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
});
