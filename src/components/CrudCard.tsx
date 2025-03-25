import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  title: string;
  icon: string;
}
export const CrudCard = ({ onPress, title, icon }: Props) => {

  const { width } = Dimensions.get('window');

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={ onPress }
    >
      <View
        style={{
          ...styles.CardContainer,
          width: width * 0.6
        }}
      >
        <Text style={styles.title}>
          {title}
        </Text>
        <FontAwesome 
          style={ styles.icon }
          name={icon}
          size={50}
          color='white'
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CardContainer:{
    justifyContent: 'center',
    backgroundColor: 'rgb(21, 63, 101)',
    marginHorizontal: 10,
    height: 90,
    marginTop: 30,
    borderRadius: 20,
    overflow: "hidden"
  },
  title: {
    marginHorizontal: 25,
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  icon:{
    position: "absolute",
    top: 20,
    right: 15,
    opacity: 0.9,
  }
})