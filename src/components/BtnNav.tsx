import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    iconName: keyof typeof FontAwesome.glyphMap;
    position: 'bottom_right' | 'bottom_left';
    onPress: () => void;
  }

export const BtnNav = ( {iconName, position, onPress} : Props ) => {

  const {width} = Dimensions.get('window');

  const btnPosition = (position == 'bottom_right') 
    ? style.BtnLocationBR
    : style.BtnLocationBL

  return(
    <TouchableOpacity
    onPress={ onPress }
    style = {{
      ...btnPosition,
      bottom: 10
    }}
    activeOpacity={0.9}
    >
      <View
        style = {style.Btn}
      >
        <FontAwesome
          style={style.icon}
          name={iconName}
          size={45}
          color='white'
        />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  BtnLocationBR: {
    position: "absolute",
    bottom: -110,
    right: 20,
  },
  BtnLocationBL: {
    position: "absolute",
    bottom: -110,
    left: 20,
  },
  Btn:{
    backgroundColor: 'rgba(255, 153, 0, 0.9)',
    width: 58,
    height: 58, 
    borderRadius: 100,
  },
  icon:{
    position: "absolute",
    top: 6,
    left: 10,
    opacity: 1,
  }
});