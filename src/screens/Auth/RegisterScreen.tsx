import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSignUp } from '../../hooks/useSignUp';
import { SendButton } from '../../components/SendButton';
import { BtnNav } from '../../components/BtnNav';
import { appTheme } from '../../themes/appTheme';

export const RegisterScreen = () => {

  const navigation = useNavigation<any>();

  const {
    loading,
    state,
    handleSignUp,
    handleInputChange,
    request
  } = useSignUp();

  return(
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >

      <View 
        style={{
          ...appTheme.globalContainer,
          marginTop: 100
        }}
      >
        <Text style={appTheme.title}>BIENVENIDO</Text>

        <Text style={appTheme.subtitle}> Crea tu cuenta </Text>

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
              editable={ loading }
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
              name='user'
              size={20}
              color='white'
            />
            <TextInput
              style={{
                ...appTheme.gradientInput
              }}
              value={ state.username }
              onChangeText={ (text) => handleInputChange('username', text) }
              placeholder="Username"
              keyboardType='default'
              placeholderTextColor="black"
              editable={ loading }
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
            editable={ loading }
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
            value={ state.repeatPass }
            onChangeText={ (text) => handleInputChange('repeatPass', text) }
            placeholder="Repetir Contraseña"
            secureTextEntry={ true }
            placeholderTextColor="black"
            editable={ loading }
          />
        </View>

        <SendButton
          title='REGISTRATE'
          background='rgb(255,152,0)'
          onPress={ handleSignUp }
          disabled={ !loading }
        />

        <BtnNav
          iconName='arrow-circle-left'
          position='bottom_left'
          onPress={ () => navigation.navigate('LoginScreen') }
        />

      </View>
    </ScrollView>
  );
}