import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { appTheme } from "../../themes/appTheme";
export const HomeUserScreen = () => {
  
  const  {width } = useWindowDimensions();

  return (
    <View style={{
      ...styles.mainContainer,
    }}>
      <View style={styles.box1}>
        <Text style={{
          ...appTheme.title,
          marginTop: 40,
          marginBottom: 10,
        }}
      >
        Hola
      </Text>
      </View>
      <View style={styles.box2}>

        <LinearGradient
        colors={['#4CAF50', '#45a049']}
        style={{
          ...styles.square1,
          width: width * 0.5,
        }}
        >
          <TouchableOpacity style={styles.gradient}>
          <FontAwesome
              style={ styles.icon }
              name='bar-chart-o'
              size={88}
              color='white'
            />
            <Text style={{
              ...styles.text,
              marginTop: 85
            }}>Sobre Mí</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
        colors={['#78cea0', '#78ceb6']}
        style={{
          ...styles.square2,
          width: width * 0.5,
        }}
        >
          <TouchableOpacity style={styles.gradient}>
          <FontAwesome
              style={ styles.icon }
              name='heart-o'
              size={88}
              color='white'
            />
            <Text style={{
              ...styles.text,
              marginTop: 85
            }}>Relájate</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
        colors={['#2196F3', '#1976D2']}
        style={{
          ...styles.square3,
          width: width * 0.5,
        }}
        >
          <TouchableOpacity style={styles.gradient}>
            <FontAwesome
              style={ styles.icon }
              name='user-circle'
              size={88}
              color='white'
            />
            <Text style={{
              ...styles.text,
              marginTop: 85
            }}>Mi perfil</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
        colors={['#b3e0f2', '#81d4fa']}
        style={{
          ...styles.square4,
          width: width * 0.5,
        }}
        >
          <TouchableOpacity style={styles.gradient}>
            <Image
              source={require('../../../assets/icon.png')} 
              style={styles.image}
            />
            <Text style={styles.text}>Luminux</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
{/*       
      <View
        style={styles.box3}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: "rgb(	237, 244, 254)",
  },
  box1:{
    flex: 1.5
  },
  box2:{
    flex: 8.5,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  // box3:{
  //   flex: 0.5
  // },
  square1:{
    height: "50%",
  },
  square2:{
    height: "50%",
  },
  square3:{
    height: "50%",
  },
  square4:{
    height: "50%",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  text: {
    fontSize: 18, 
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 30,  
    marginHorizontal: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    position: "absolute",
    top: 90,
    left: 52,
    opacity: 1,
  }
})