import React, { useContext} from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { AuthContext } from "../context/AuthContext";
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer' 
import { appTheme } from "../themes/appTheme";
import { SendButton } from "./SendButton";
export const DrawerMenu = ( { navigation } : DrawerContentComponentProps ) => {
  
  // const { authState, logout } = useContext(AuthContext);

  const assets: string = './../../assets/';

  return (
      <DrawerContentScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <Image
        style={ appTheme.avatar }
        source= {require( assets + 'icon.png')}

        />
        <Text
          style={{
            ...appTheme.title,
            marginTop: 10
          }}
        >
        </Text>
          <SendButton
            title="Cerrar Sesión"
            onPress={ () => {} }
            background="gray"
          />
        </View>
        <View
          style={ appTheme.menuContainer }
        >
          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("AuthNavigator") }
          >
            <Text style={ appTheme.texBtn }>
              Log In/ Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("UserNavigator") }
          >
            <Text style={ appTheme.texBtn }>
              Usuario
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("AdminNavigator") }
          >
            <Text style={ appTheme.texBtn }>
              Panel de administración
            </Text>
          </TouchableOpacity>
          
        </View>
      </DrawerContentScrollView>
    
  );
}