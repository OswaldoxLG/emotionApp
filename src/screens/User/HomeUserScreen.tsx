import React, { useContext, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AuthContext } from "../../context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackUserParams } from "../../navigator/UserNavigator";

const  {width, height } = Dimensions.get('window');
export const HomeUserScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackUserParams>>();
  const { authState } = useContext(AuthContext);
  
  return (
    <View style={{
      ...styles.mainContainer,
    }}>
      <View style={styles.box1}>
        <Text style={styles.title}
      >
        {
          ( authState.isLoggedIn )
          ? `Bienvenido a E-Motion, ${authState.userName}.`
          : "Bienvenido a E-Motion."
        }
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
          <TouchableOpacity 
            style={styles.gradient}
            onPress={ () => {
              navigation.navigate('InfoUserScreen')
            }}
          >
          <FontAwesome
              style={ styles.icon }
              name='bar-chart-o'
              size={88}
              color='white'
            />
            <Text style={{
              ...styles.text,
              marginTop: 100
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
          <TouchableOpacity 
            style={styles.gradient}
            onPress={ () => {
              navigation.navigate('RecursosUserScreen')
            }}
          >
          <FontAwesome
              style={ styles.icon }
              name='heart-o'
              size={88}
              color='white'
            />
            <Text style={{
              ...styles.text,
              marginTop: 100
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
          <TouchableOpacity 
            style={styles.gradient}
            onPress={ () => { navigation.navigate('ProfileUserScreen') }}
          >
            <FontAwesome
              style={ styles.icon }
              name='user-circle'
              size={88}
              color='white'
            />
            <Text style={{
              ...styles.text,
              marginTop: 100
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
          <TouchableOpacity 
            style={styles.gradient}
            onPress={ () => {
              navigation.navigate('LuminuxUserScreen')
            }}
          >
            <Image
              source={require('../../../assets/logo2.png')} 
              style={styles.image}
            />
            <Text style={styles.textLu}>E-Motion</Text>
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  box2:{
    flex: 7,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  title:{
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 32, 
    fontWeight: "bold",
    fontStyle: 'italic',
    textAlign: 'center',
  },
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
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18, 
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 2,  
    marginHorizontal: 15,
  },
  textLu: {
    fontSize: 18, 
    fontWeight: "500",
    textAlign: "center",
    marginHorizontal: 15,
    bottom: 50
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