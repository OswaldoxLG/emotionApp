import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DashboardScreen } from "../screens/Admin/DashboardScreen";
import { IndexUserScreen } from "../screens/Admin/IndexUserScreen";
import { FormUserScreen } from "../screens/Admin/FormUserScreen";
import { ShowUserScreen } from "../screens/Admin/ShowUserScreen";
import { UserResponse } from "../interfaces/userInterfaces";
import { GraficosScreen } from "../screens/Admin/GraficosScreen";
import { EstresScreen } from "../screens/Admin/EstresScreen";
import { BottomAdminTabNavigator } from "./BottomAdminTabNavigator";

export type RootStackAdminParams = {
  BottomAdminTabNavigator: undefined;
  DashboardScreen: undefined;
  IndexUserScreen: undefined;
  GraficosScreen: undefined;
  EstresScreen: undefined;
  FormUserScreen: { user: UserResponse };
  ShowUserScreen: { user: UserResponse };
}
export const AdminNavigator = () => {
    const Stack = createStackNavigator<RootStackAdminParams>();
  return(
    <Stack.Navigator
    initialRouteName='BottomAdminTabNavigator'
    screenOptions={{
      headerMode: 'float',
      headerShown: false,
      headerStyle: {
        height: 100,
        shadowColor: 'black',
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 6,
        borderRadius: 20,
        opacity: 0.7,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
      },
      headerTintColor: 'white',
      cardStyle: {
        backgroundColor: 'white',
      }
    }}    
    >
      <Stack.Screen
        name="BottomAdminTabNavigator"
        component={BottomAdminTabNavigator}
      />

      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
      />

      <Stack.Screen
        name="IndexUserScreen"
        component={IndexUserScreen}
      />

      <Stack.Screen
        name="FormUserScreen"
        component={FormUserScreen}
      />

      <Stack.Screen
        name="ShowUserScreen"
        component={ShowUserScreen}
      />

      <Stack.Screen
        name="GraficosScreen"
        component={GraficosScreen}
      />

      <Stack.Screen
        name="EstresScreen"
        component={EstresScreen}
      />

    </Stack.Navigator>
  );
}