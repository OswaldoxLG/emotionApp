import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SendButton } from '../../components/SendButton';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from '../../hooks/useLogin';
import { appTheme } from '../../themes/appTheme';
export const LoginScreen = () => {

  const navigation = useNavigation();

  const {
    loading, 
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

      <View style={ styles.box1 }>
        <View
          style={{
            ...styles.circle1,
          }}
        />
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.circleGradient}
        />
      </View>

      <Text 
        style={ appTheme.title }
      >
        INICIAR SESIÓN
      </Text>

      <View style={ styles.box2 }>
      {
        (!request) &&
        <Text style={appTheme.subtitle}>
          { 'La contraseña fue incorrecta \n' }
          { 'Envío de datos faltantes' }
        </Text>
      }
      <View style={appTheme.inputContainer}>
          <LinearGradient
            colors={['#ffffff', '#3b5998', ]}
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
            editable={ loading }
          />
        </View>

        <View style={appTheme.inputContainer}>
          <LinearGradient
            colors={['#ffffff', '#3b5998', ]}
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
            value={ state.pass }
            onChangeText={ (text) => handleInputChange('pass', text) }
            placeholder="Contraseña"
            secureTextEntry={ true }
            placeholderTextColor="black"
            editable={ loading }
          />
        </View>
        
        <SendButton
          title='INGRESAR'
          background='rgb(21, 63, 101)'
          onPress={ handleLogin }
          disabled={ !loading }
        />

        <Text style={{ marginTop: 10, textAlign: 'center' }}>
          ¿No tienes cuenta?{ ' ' }
          <Text 
            style={{ 
              color: "rgb(21, 63, 101)", 
              textDecorationLine: 'underline',
              fontWeight: 'bold',
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
  circle1: {
    width: 490,
    height: 490,
    borderRadius: 300,
    top: -260,
  },
  circleGradient: {
    width: 490,
    height: 490,
    borderColor: 'rgb(0, 0, 0)',
    borderRadius: 300,
    borderWidth: 1,
    top: -263,
    position: 'absolute',
    shadowColor: 'rgb(181, 112, 27)',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 10,
  }
})