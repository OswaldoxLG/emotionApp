import React, { useContext} from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer' 
import { appTheme } from "../themes/appTheme";
import { DefaultBtn } from "./DefaultBtn";
export const DrawerMenu = ( { navigation } : DrawerContentComponentProps ) => {
  
  const { authState, logOut } = useContext(AuthContext);

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
        source= 
        {
          ( authState.isLoggedIn )
          ? { uri: `data:image/jpeg;base64,${authState.profileImage}`}
          :require( assets + 'user.jpg')
        }
        />
        <Text
          style={{
            ...appTheme.title,
            marginTop: 10
          }}
        >
          {`Hola, ${authState.userName}`}
        </Text>
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
          {
            ( !authState.isLoggedIn ) 
            ?
            <DefaultBtn
            onPress={ () => navigation.navigate('LoginScreen') }
            title='INICIA SESIÓN'
            />
            :
            <DefaultBtn
            onPress={ () => logOut() }
            iconName='sign-out'
            title='SALIR'
          />
          }
        </View>
      </DrawerContentScrollView>
    
  );
}