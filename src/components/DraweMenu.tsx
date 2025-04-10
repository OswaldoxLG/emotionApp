import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { appTheme } from "../themes/appTheme";
import { DefaultBtn } from "./DefaultBtn";
import { FontAwesome } from "@expo/vector-icons";

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
        <Text style={{ ...appTheme.nametxt, marginTop: 10 }}>
          {`${authState.userName || "Usuario"}`}
        </Text>
      </View>

      <View style={appTheme.menuContainer}>
        {/* Navegación de usuario */}
        {authState.role === "usuario" && (
          <>
          <TouchableOpacity
            style={appTheme.menuBtn}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("UserNavigator", { 
              screen: "BottomTabNavigator",
              params: { screen: "HomeUserScreen" }
            })}
          >
            <FontAwesome
              style={appTheme.iconDrawer}
              name={"home"}
              size={25}
              color="gray"
            />
            <Text style={appTheme.texBtn}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appTheme.menuBtn}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("UserNavigator", { 
              screen: "BottomTabNavigator",
              params: { screen: "InfoUserScreen" }
            })}
          >
            <FontAwesome
              style={appTheme.iconDrawer}
              name={"bar-chart-o"}
              size={25}
              color="gray"
            />
            <Text style={appTheme.texBtn}>Estadísticas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appTheme.menuBtn}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("UserNavigator", { 
              screen: "BottomTabNavigator",
              params: { screen: "ProfileUserScreen" }
            })}
          >
            <FontAwesome
              style={appTheme.iconDrawer}
              name={"user"}
              size={25}
              color="gray"
            />
            <Text style={appTheme.texBtn}>Mi Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appTheme.menuBtn}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("UserNavigator", { 
              screen: "BottomTabNavigator",
              params: { screen: "RecursosUserScreen" }
            })}
          >
            <FontAwesome
              style={appTheme.iconDrawer}
              name={"heart"}
              size={25}
              color="gray"
            />
            <Text style={appTheme.texBtn}>Meditación</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appTheme.menuBtn}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("UserNavigator", { 
              screen: "BottomTabNavigator",
              params: { screen: "RelaxScreen" }
            })}
          >
            <FontAwesome
              style={appTheme.iconDrawer}
              name={"leaf"}
              size={25}
              color="gray"
            />
            <Text style={appTheme.texBtn}>Respiración</Text>
          </TouchableOpacity>
          </>
        )}
        {/* Navegación de administrador */}
        {authState.role === "admin" && (
          <>
            <TouchableOpacity
              style={appTheme.menuBtn}
              onPress={() => navigation.navigate("AdminNavigator", {
                screen: "BottomAdminTabNavigator",
                params: { screen: "DashboardScreen" }
              })}
              activeOpacity={0.9}
            >
              <FontAwesome
                style={appTheme.iconDrawer}
                name={"home"}
                size={25}
                color="gray"
              />
              <Text style={appTheme.texBtn}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={appTheme.menuBtn}
              onPress={() => navigation.navigate("AdminNavigator", {
                screen: "BottomAdminTabNavigator",
                params: { screen: "IndexUserScreen" }
              })}
              activeOpacity={0.9}
            >
              <FontAwesome
                style={appTheme.iconDrawer}
                name={"user"}
                size={25}
                color="gray"
              />
              <Text style={appTheme.texBtn}>Usuarios</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={appTheme.menuBtn}
              onPress={() => navigation.navigate("AdminNavigator", {
                screen: "BottomAdminTabNavigator",
                params: { screen: "GraficosScreen" }
              })}
              activeOpacity={0.9}
            >
              <FontAwesome
                style={appTheme.iconDrawer}
                name={"bar-chart-o"}
                size={25}
                color="gray"
              />
              <Text style={appTheme.texBtn}>Gráficas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={appTheme.menuBtn}
              onPress={() => navigation.navigate("AdminNavigator", {
                screen: "BottomAdminTabNavigator",
                params: { screen: "EstresScreen" }
              })}
              activeOpacity={0.9}
            >
              <FontAwesome
                style={appTheme.iconDrawer}
                name={"heartbeat"}
                size={25}
                color="gray"
              />
              <Text style={appTheme.texBtn}>Estrés</Text>
            </TouchableOpacity>
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
