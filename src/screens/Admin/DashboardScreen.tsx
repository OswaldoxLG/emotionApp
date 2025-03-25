import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { CrudCard } from "../../components/CrudCard";
import { useNavigation } from '@react-navigation/native';
import { appTheme } from "../../themes/appTheme";
export const DashboardScreen = () => {

const navigation = useNavigation();

  return (

      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#B3FF19', '#2196F3']}
          start={{ x: 2, y: 2 }}
          end={{ x: 0, y: 0 }}
          style={styles.box1}
        >
          <Text style={appTheme.title}>
            Hola, 
          </Text>
        </LinearGradient>
        
        <View style={styles.box2}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <CrudCard
              onPress={() => navigation.navigate('IndexUserScreen')}
              title="USUARIOS"
              icon='users'
            />
              <CrudCard
              onPress={() => navigation.navigate('IndexUserScreen')}
              title="GRÁFICOS"
              icon='bar-chart-o'
            />
            
          </ScrollView>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  box1:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2:{
    flex: 7,
    backgroundColor: "rgb(	237, 244, 254)",
    alignItems: 'center',
  }
})