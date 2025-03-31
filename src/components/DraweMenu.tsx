import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { appTheme } from "../themes/appTheme";
import { DefaultBtn } from "./DefaultBtn";
export const DrawerMenu = ({ navigation }: DrawerContentComponentProps) => {
  const { authState, logOut } = useContext(AuthContext);
  const assets: string = "./../../assets/";

  return (
    <DrawerContentScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={appTheme.avatar}
          source={
            authState.profileImage
              ? { uri: `data:image/jpeg;base64,${authState.profileImage}` }
              : require(assets + "user.jpg")
          }
        />
        <Text style={{ ...appTheme.title, marginTop: 10 }}>
          {`Hola, ${authState.userName || "Usuario"}`}
        </Text>
      </View>

      <View style={appTheme.menuContainer}>
        {/* Navegación de usuario */}
        {authState.role === "user" && (
          <TouchableOpacity
            style={appTheme.menuBtn}
            onPress={() => navigation.navigate("UserNavigator")}
          >
            <Text style={appTheme.texBtn}>Panel de Usuario</Text>
          </TouchableOpacity>
        )}
        {/* Navegación de administrador */}
        {authState.role === "admin" && (
          <>
            <TouchableOpacity
              style={appTheme.menuBtn}
              onPress={() => navigation.navigate("AdminNavigator")}
            >
              <Text style={appTheme.texBtn}>Panel de Administración</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={appTheme.menuBtn}
              onPress={() => navigation.navigate("UserNavigator")}
            >
              <Text style={appTheme.texBtn}>Vista de Usuario</Text>
            </TouchableOpacity> */}
          </>
        )}

        <DefaultBtn
          onPress={() => logOut()}
          iconName="sign-out"
          title="CERRAR SESIÓN"
        />
      </View>
    </DrawerContentScrollView>
  );
};
