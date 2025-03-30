import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
  background: string;
  title: string;
  disabled?: any;
}

export const SendButton = ({ onPress, background = 'blue', title, disabled }: Props) => {

  return (
      <TouchableOpacity
      onPress={ onPress }
      disabled={ disabled }
      >
        <View
          style={{
            ...style.btnContainer,
            backgroundColor: background
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
  btnContainer: {
    marginBottom: 10,
    marginLeft: 10, 
    marginRight: 10,
    marginTop: 25,
    padding: 10,
    width: 'auto',
    height: 60,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
  },
  btnTitle: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center'
  }
})