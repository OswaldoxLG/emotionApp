import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    title: string, 
    position: 'bottom_right' | 'bottom_left';
    onPress: () => void;
  }


export const BtnNav = ( {title, position, onPress} : Props ) => {

  const btnPosition = (position == 'bottom_right') 
    ? style.BtnLocationBR
    : style.BtnLocationBL

  return(
    <TouchableOpacity
    onPress={ onPress }
    style = { btnPosition }
    >
      <View
        style = { style.Btn}
      >
        <Text
          style = { style.BtnText }
        >
          { title }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  BtnLocationBR: {
    position: "absolute",
    bottom: -110,
    right: 20
  },
  BtnLocationBL: {
    position: "absolute",
    bottom: -110,
    left: 20  
  },
  Btn:{
    backgroundColor: "rgb(21, 63, 101)",
    width: 58,
    height: 58, 
    borderRadius: 100, 
  },
  BtnText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  }

});