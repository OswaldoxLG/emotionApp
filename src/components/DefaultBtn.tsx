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
          style={ style.icon }
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
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    
  },
  btnContainer: {
    marginHorizontal: 30,
    padding: 5,
    width: 'auto',
    height: 45,
    justifyContent: 'center',
  },
  btnTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  icon:{
    position: "absolute",
    bottom: 12,
    left: 12,
    opacity: 1,
  }
})