import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { appTheme } from '../../themes/appTheme';
import { useSensorApi } from '../../hooks/useSensorApi';

const { width } = Dimensions.get('window');
export const EstresScreen = () => {
  // Uso del hook para cada sensor con limit=1 para obtener solo el registro más actual.
  const { data: bpmData, isLoading: isLoadingBpm } = useSensorApi('bpm', 1);
  const { data: gsrData, isLoading: isLoadingGsr } = useSensorApi('gsr', 1);

  //Extraer valor del sensor
  const bpmValue = bpmData && bpmData.length > 0 ? bpmData[0].value : 0;
  const gsrValue = gsrData && gsrData.length > 0 ? gsrData[0].value : 0;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={appTheme.nametxt}>Frecuencia Cardiaca</Text>
      <View style={styles.secContainer}>
        <View style={styles.iconCon}>
          <FontAwesome name="heart" size={70} style={appTheme.icon} color="white" />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.title}>BPM</Text>
          {isLoadingBpm ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.valueText}>{bpmValue}</Text>
          )}
        </View>
      </View>
      <Text style={appTheme.nametxt}>Respuesta Gálvanica de la Piel</Text>
      <View style={styles.secContainer}>
        <View style={styles.iconCon}>
          <FontAwesome name="bolt" size={70} style={appTheme.icon} color="white" />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.title}>GSR</Text>
          {isLoadingGsr ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.valueText}>{gsrValue}</Text>
          )}
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
  valueText: {
    fontFamily: 'sans-serif',
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    marginTop: 8,
    fontWeight: 'bold',
  },
});
