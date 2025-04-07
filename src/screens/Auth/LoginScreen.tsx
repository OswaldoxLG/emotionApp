import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, StyleSheet, StatusBar, Image, Dimensions, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SendButton } from '../../components/SendButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackAuthParams } from '../../navigator/AuthNavigator';
import { useLogin } from '../../hooks/useLogin';
import { appTheme } from '../../themes/appTheme';

const { width, height } = Dimensions.get('window');

export const LoginScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackAuthParams>>();

  const {
    loading, 
    isEditable,
    state, 
    handleLogin, 
    handleInputChange, 
    request 
  } = useLogin();
  
  return(
    <SafeAreaView 
      style={ appTheme.globalContainer }
      // edges={['right', 'left', 'bottom']}
    >
      {/* <StatusBar
        hidden={ true }
      /> */}

      <View style={styles.box1}>
        <View style={styles.circle1} />
        <LinearGradient
          colors={['#ff9800', '#ff5800', '#ff8300', '#ff9800']}
          style={styles.circleGradient}
        >
          <Image
            style={styles.logo}
            source={require('../../../assets/logo2.png')}
          />
          <Text style={styles.nameLogo}>E-MOTION</Text>
        </LinearGradient>
      </View>

      <Text 
        style={ appTheme.title }
      >
        INICIAR SESIÓN
      </Text>

      <View style={ styles.box2 }>
      {/* {
        (!request) &&
        <Text style={appTheme.subtitle}>
          { 'La contraseña fue incorrecta \n' }
          { 'Envío de datos faltantes' }
        </Text>
      } */}
      <View style={appTheme.inputContainer}>
          <LinearGradient
            colors={['#ffffff', '#ffc167']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={appTheme.inputGradient}
          />
            <FontAwesome
              style={ appTheme.icon }
              name='envelope'
              size={20}
              color='white'
            />
          <TextInput
            style={{
              ...appTheme.gradientInput
            }}
            value={ state.email }
            onChangeText={ (text) => handleInputChange('email', text) }
            placeholder="Correo Electronico"
            keyboardType='email-address'
            placeholderTextColor="black"
            editable={ isEditable }
          />
        </View>

        <View style={appTheme.inputContainer}>
          <LinearGradient
            colors={['#ffffff', '#ffc167']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={appTheme.inputGradient}
          />
            <FontAwesome
              style={ appTheme.icon }
              name='lock'
              size={20}
              color='white'
            />
          <TextInput
            style={{
              ...appTheme.gradientInput
            }}
            value={ state.password }
            onChangeText={ (text) => handleInputChange('password', text) }
            placeholder="Contraseña"
            secureTextEntry={ true }
            placeholderTextColor="black"
            editable={ isEditable }
          />
        </View>
        
        <SendButton
          title={ loading ? 'CARGANDO...' : 'INGRESAR' }
          background='rgb(255,152,0)'
          onPress={ handleLogin }
          disabled={ loading }
        />

        <Text style={{ marginTop: 10, textAlign: 'center' }}>
          ¿No tienes cuenta?{ ' ' }
          <Text 
            style={{ 
              color: "blue", 
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              marginLeft: 10
            }} 
            onPress={() => navigation.navigate('RegisterScreen')}>
              Registrate
          </Text>
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box1:{
    flex: 4,
    overflow: 'hidden',
  }, 
  box2: {
    flex: 6,
    marginTop: 20,
  },
  logo: {
    top: height * 0.18,
    width: width * 0.8,
    height: width * 0.8
  },
  nameLogo: {
    fontFamily: 'sans-serif-thin',
    top: height * 0.05,
    fontSize: width * 0.07,
    fontWeight: '700',
    color: 'white'
  },
  circle1: {
    width: 490,
    height: 490,
    borderRadius: 300,
    top: -260,
  },
  circleGradient: {
    width: 490,
    height: 490,
    borderRadius: 300,
    top: -263,
    position: 'absolute',
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})