import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { appTheme } from '../themes/appTheme';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
  iconName?: keyof typeof FontAwesome.glyphMap;
  onPress?: () => void;
  title: string;
  value?: string;
}

export const DefaultBtn = ({ onPress, title, iconName, value  }: Props) => {

  return (
      <TouchableOpacity
      onPress={ onPress }
      style={style.mainContainer}
      >
      <LinearGradient
        colors={['#ffffff', '#ffc167']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
        style={appTheme.inputGradient}
      />
        <FontAwesome
          style={ appTheme.icon }
          name={ iconName }
          size={20}
          color='white'
        />
        <View
          style={{
            ...style.btnContainer
          }}
        >
          <Text
            style={ style.btnTitle }
          >
            { title }
          </Text>
        </View>
      </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  mainContainer:{
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1
  },
  btnContainer: {
    margin: 10,
    padding: 5,
    width: 120,
    height: 35,
    justifyContent: 'center',
  },
  btnTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
  }
})