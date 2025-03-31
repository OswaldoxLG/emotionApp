import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { UserNavigator } from "./UserNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { AdminNavigator } from "./AdminNavigator";
import { DrawerMenu } from "../components/DraweMenu";

export type RootDrawerParams = {
  AuthNavigator: undefined;
  UserNavigator: undefined;
  AdminNavigator: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();
  const { authState } = useContext(AuthContext);

  // si no está autenticado, muestra login, signup
  if (!authState.isLoggedIn) {
    return <AuthNavigator />;
  }

  return (
    <Drawer.Navigator
      initialRouteName={
        authState.role === "admin" ? "AdminNavigator" : "UserNavigator"
      }
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? "permanent" : "front",
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "white",
          width: width * 0.7,
        },
      }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen
        name="UserNavigator"
        component={UserNavigator}
        options={{
          swipeEnabled: authState.role === "usuario",
        }}
      />
      <Drawer.Screen
        name="AdminNavigator"
        component={AdminNavigator}
        options={{
          swipeEnabled: authState.role === "admin",
        }}
      />
    </Drawer.Navigator>
  );
};
