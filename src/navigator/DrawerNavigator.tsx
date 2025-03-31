import React, { useContext} from "react";
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
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

const Navigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="AuthNavigator"
      screenOptions={{
        headerShown: false, //Desaparece el icono, se muestra deslizandolo
        drawerType: width >= 768 ? 'permanent' : 'front', 
        drawerPosition: "right",
        // overlayColor: "transparent",
        drawerStyle: {
          backgroundColor: 'white',
          width: width * 0.7,
        }
      }}
      drawerContent={ (props) => <DrawerMenu {...props}/> }
    >
      <Drawer.Screen
        name= "AuthNavigator"
        component={ AuthNavigator }
      />

      <Drawer.Screen
        name= "UserNavigator"
        component={ UserNavigator }
      />

      <Drawer.Screen
        name= "AdminNavigator"
        component={ AdminNavigator }
      />

    </Drawer.Navigator>
  );
}

  // export const DrawerNavigator = () => {
  //   const { authState } = useContext( AuthContext );
  //     return( authState.isLoggedIn) ? <Navigator/> : <LoginScreen/>
  // }

  export const DrawerNavigator = () => (
    <Navigator/>
  )