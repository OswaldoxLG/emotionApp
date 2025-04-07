import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeUserScreen } from "../screens/User/HomeUserScreen";
import { ProfileUserScreen } from "../screens/User/ProfileUserScreen";
import { InfoUserScreen } from "../screens/User/InfoUserScreen";
import { RecursosUserScreen } from "../screens/User/RecursosUserScreen";
import { RelaxScreen } from "../screens/User/RelaxScreen";

import { FontAwesome } from "@expo/vector-icons";

export type RootStackParams = {
  HomeUserScreen: undefined;
  ProfileUserScreen: undefined;
  InfoUserScreen: undefined;
  RelaxScreen : undefined;
  RecursosUserScreen: undefined;
}

export const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<RootStackParams>();

  return(
    <BottomTab.Navigator
      initialRouteName="HomeUserScreen"
      screenOptions={ ({ route }) => ({
        headerShown: false,
        tabBarShowIcon: true,
        tabBarPressColor: 'rgba(255, 152, 0, 0.1)',
        tabBarPressOpacity: 0.8,
        tabBarActiveTintColor: 'rgb(255,152,0)',
        tabBarInactiveTintColor: "#666666",
        tabBarShowLabel: true, // Mostrar label
        tabBarLabelStyle: { 
            fontSize: 8, 
            fontWeight: 'bold' 
        },
        tabBarItemStyle: {
            borderTopWidth: 3,
            borderTopColor: 'rgb(255,152,0)',
        },
        tabBarStyle: { backgroundColor: "white" },
        tabBarIndicatorStyle: { 
            backgroundColor: 'rgb(255,152,0)',
            height: 4, 
            borderRadius: 10,
        },
        tabBarIcon: () => {
            let iconName: keyof typeof FontAwesome.glyphMap;
            switch( route.name ){
                case 'InfoUserScreen':
                    iconName = 'bar-chart-o';
                    break;
                case 'ProfileUserScreen':
                    iconName = 'user';
                    break;
                case 'HomeUserScreen':
                    iconName = 'home';
                    break;
                case 'RecursosUserScreen':
                    iconName = 'heart';
                    break;
                case 'RelaxScreen':
                    iconName = 'leaf';
                    break;
            }
            return <FontAwesome name={`${iconName}`} size={24} />
        }
      })}
    >
      <BottomTab.Screen
        name="InfoUserScreen"
        component={InfoUserScreen}
        options={{ title: "Status" }}
      />
      <BottomTab.Screen
        name="ProfileUserScreen"
        component={ProfileUserScreen}
        options={{ title: "Mi perfil" }}
      />
      <BottomTab.Screen
        name="HomeUserScreen"
        component={HomeUserScreen}
        options={{ title: "Home" }}
      />
      <BottomTab.Screen
        name="RecursosUserScreen"
        component={RecursosUserScreen}
        options={{ title: "Medita" }}
      />
      <BottomTab.Screen
        name="RelaxScreen"
        component={RelaxScreen}
        options={{ title: "Respira" }}
      />
    </BottomTab.Navigator>
  );
}