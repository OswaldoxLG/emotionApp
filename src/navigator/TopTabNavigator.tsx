import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { DashboardScreen } from '../screens/Admin/DashboardScreen';
import { EstresScreen } from '../screens/Admin/EstresScreen';
import { GraficosScreen } from '../screens/Admin/GraficosScreen';
import { IndexUserScreen } from '../screens/Admin/IndexUserScreen';

export type RootTabTopParam = {
  DashboardScreen: undefined;
  EstresScreen: undefined;
  GraficosScreen: undefined;
  IndexUserScreen: undefined;
}

export const TopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator<RootTabTopParam>();
  return(
    <Tab.Navigator
    initialRouteName='DashboardScreen'
    tabBarPosition='top'
    screenOptions={({route}) => ({
      tabBarShowIcon: true,
      tabBarPressColor: 'rgb(255,152,0)',
      tabBarPressOpacity: 1,
      tabBarActiveTintColor: 'rgb(255,152,0)',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: true,
      tabBarLabelStyle: {
        fontSize: 8,
        fontWeight: 'bold'
      },
      tabBarItemStyle:{
        borderTopWidth: 20,
        borderTopColor: 'white',
      },
      tabBarStyle:{
        backgroundColor: "white",
        height: 80,
      },
      tabBarIndicatorStyle:{
        backgroundColor: 'rgb(255,152,0)',
        height: 3,
        borderRadius: 5
      },
      tabBarIcon: ({color}) => {
        let iconName: keyof typeof FontAwesome.glyphMap;
        switch( route.name) {
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
            iconName = 'heartbeat';
            break;
        }
        return <FontAwesome name={iconName} size={20} color={color} />;
      },
    })}
    >
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ title: "Home"}}
      />
      <Tab.Screen
        name="EstresScreen"
        component={EstresScreen}
        options={{ title: "Estrés"}}
      />
      <Tab.Screen
        name="GraficosScreen"
        component={GraficosScreen}
        options={{ title: "Gráficas"}}
      />
      <Tab.Screen
        name="IndexUserScreen"
        component={IndexUserScreen}
        options={{ title: "Usuarios"}}
      />
    </Tab.Navigator>
  );
}