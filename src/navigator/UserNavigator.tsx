import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeUserScreen } from "../screens/User/HomeUserScreen";
import { ProfileUserScreen } from "../screens/User/ProfileUserScreen";
import { InfoUserScreen } from "../screens/User/InfoUserScreen";
import { LuminuxUserScreen } from "../screens/User/LuminuxScreen";

export type RootStackUserParams = {
  HomeUserScreen: undefined;
  ProfileUserScreen: undefined;
  InfoUserScreen: undefined;
  LuminuxUserScreen: undefined;
}
export const UserNavigator = () => {
    const Stack = createStackNavigator<RootStackUserParams>();
  return(
    <Stack.Navigator
    initialRouteName='HomeUserScreen'
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
        name="HomeUserScreen"
        component={HomeUserScreen}
      />
      <Stack.Screen
        name="ProfileUserScreen"
        component={ProfileUserScreen}
      />
      <Stack.Screen
        name="InfoUserScreen"
        component={InfoUserScreen}
      />
      <Stack.Screen
        name="LuminuxUserScreen"
        component={LuminuxUserScreen}
      />
    </Stack.Navigator>
  );
}