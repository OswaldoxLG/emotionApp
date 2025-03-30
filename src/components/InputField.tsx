import React from 'react';
import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { appTheme } from '../themes/appTheme';

interface Props {
  iconName: keyof typeof FontAwesome.glyphMap;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText: ( text: string ) => void;
  value: string;
}
export const InputField = ({ iconName, placeholder, keyboardType, secureTextEntry, onChangeText, value } : Props) => {
  return (
    <View style={appTheme.inputContainer}>
      <LinearGradient
        colors={['#ffffff', '#ffc167']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
        style={appTheme.inputGradient}
      />
      <FontAwesome
        style={appTheme.icon}
        name={iconName}
        size={20}
        color='white'
      />
      <TextInput
        style={appTheme.gradientInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="black"
      />
    </View>
  );
};