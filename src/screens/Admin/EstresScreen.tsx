import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { appTheme } from '../../themes/appTheme';
interface EstresScreenProps {}

const { width } = Dimensions.get('window');
export const EstresScreen = (props: EstresScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={appTheme.nametxt}>Frecuencia Cardiaca</Text>
        <View style={styles.secContainer}>
          <View style={styles.iconCon}>
          <FontAwesome
            name='heart'
            size={70}
            style={appTheme.icon}
            color={'white'}
          />
          </View>
          <View style={styles.textCon}>
          <Text style={styles.title}>BPM</Text>
          </View>
        </View>
        <Text style={appTheme.nametxt}>Respuesta Gálvanica de la Piel</Text>
        <View style={styles.secContainer}>
          <View style={styles.iconCon}>
          <FontAwesome
            name='bolt'
            size={70}
            style={appTheme.icon}
            color={'white'}
          />
          </View>
          <View style={styles.textCon}>
          <Text style={styles.title}>GSR</Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    marginTop: 40,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCon:{
    flex: 1,
    height: '100%',
    width: '40%',
  },
  textCon:{
    height: '100%',
    width: '60%',
  },
  secContainer:{
    backgroundColor: 'rgb(255,152,0)',
    flexDirection: 'row',
    width: width * 0.8,
    borderRadius: 15,
    marginBottom: 25,
    height: 120,
    padding: 10, 
    elevation: 5,
    shadowColor: 'blue',
  },
  title:{
    fontFamily: "sans-serif",
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

});
