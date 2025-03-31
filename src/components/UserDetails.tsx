import React, { useEffect} from "react";
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { UserResponse } from "../interfaces/userInterfaces";
import { appTheme } from "../themes/appTheme";

interface Props{
  user: UserResponse;
}

export const UserDetail = ( {user}: Props ) => {

  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={{ alignItems: 'center'}}>
        <View style={{ marginBottom: 30 }}>
        <Image
        style={appTheme.avatar}
        source={
          user.image
            ? { uri: `data:image/jpeg;base64,${user.image}` }
            : require("../../assets/user.jpg")
        }
        resizeMode="cover"
      />
        </View>
        <View style={styles.boxText}>
          <Text style={styles.subtitle}>Nombre:</Text>
          <Text style={styles.txtData}>{user.name || "Nombre no disponible"}</Text>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.subtitle}>Username:</Text>
          <Text style={styles.txtData}>{user.username || "Username no disponible"}</Text>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.subtitle}>Apellidos:</Text>
          <Text style={styles.txtData}>{user.lastname || "Apellidos no disponibles"}</Text>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.subtitle}>Correo:</Text>
          <Text style={styles.txtData}>{user.email || "Correo no disponible"}</Text>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.subtitle}>Teléfono:</Text>
          <Text style={styles.txtData}>{user.phone || "Teléfono no disponible"}</Text>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.subtitle}>Sexo:</Text>
          <Text style={styles.txtData}>{user.sex || "Sexo no disponible"}</Text>
        </View>
        <View style={styles.boxText}>
          <Text style={styles.subtitle}>Rol:</Text>
          <Text style={styles.txtData}>{user.rol || "Rol no disponible"}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txtData:{
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }, 
  subtitle:{
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 16, 
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,  
    marginHorizontal: 15,
  },
  boxText:{
    margin:15
  }
})