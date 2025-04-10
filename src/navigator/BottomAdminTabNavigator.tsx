import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import { DashboardScreen } from '../screens/Admin/DashboardScreen';
import { EstresScreen } from '../screens/Admin/EstresScreen';
import { GraficosScreen } from '../screens/Admin/GraficosScreen';
import { IndexUserScreen } from '../screens/Admin/IndexUserScreen';

export type RootStackParams = {
  DashboardScreen: undefined;
  EstresScreen: undefined;
  GraficosScreen: undefined;
  IndexUserScreen: undefined;
}

export const BottomAdminTabNavigator = () => {
  const BottomTab = createBottomTabNavigator<RootStackParams>();

  return(
    <BottomTab.Navigator
      initialRouteName="DashboardScreen"
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
                case 'DashboardScreen':
                    iconName = 'home';
                    break;
                case 'IndexUserScreen':
                    iconName = 'user';
                    break;
                case 'GraficosScreen':
                    iconName = 'bar-chart-o';
                    break;
                case 'EstresScreen':
                    iconName = 'heart';
                    break;
            }
            return <FontAwesome name={`${iconName}`} size={24} />
        }
      })}
    >
      <BottomTab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ title: "Home"}}
      />
      <BottomTab.Screen
        name="EstresScreen"
        component={EstresScreen}
        options={{ title: "Estrés"}}
      />
      <BottomTab.Screen
        name="GraficosScreen"
        component={GraficosScreen}
        options={{ title: "Gráficas"}}
      />
      <BottomTab.Screen
        name="IndexUserScreen"
        component={IndexUserScreen}
        options={{ title: "Usuarios"}}
      />
    </BottomTab.Navigator>
  );
}