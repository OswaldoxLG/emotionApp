import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/Auth/LoginScreen";
import { RegisterScreen } from "../screens/Auth/RegisterScreen";

export type RootStackAuthParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
}
export const AuthNavigator = () => {
    const Stack = createStackNavigator<RootStackAuthParams>();
  return(
    <Stack.Navigator
    initialRouteName='LoginScreen'
    screenOptions={{
      headerMode: 'float',
      headerShown: false,
      headerStyle: {
        height: 100,
        shadowColor: 'violet',
        backgroundColor: 'violet',
        borderColor: 'pink',
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
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "LOGIN" }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: "SIGN UP"}}
      />
    </Stack.Navigator>
  );
}