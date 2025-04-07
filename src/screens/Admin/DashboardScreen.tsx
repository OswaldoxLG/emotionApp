import React, { useContext} from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from "../../context/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { CrudCard } from "../../components/CrudCard";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackAdminParams } from "../../navigator/AdminNavigator";
import { appTheme } from "../../themes/appTheme";

export const DashboardScreen = () => {

const navigation = useNavigation<StackNavigationProp<RootStackAdminParams>>();
  const { authState } = useContext(AuthContext);
  return (

      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#00e7ff', '#ff9800']}
          start={{ x: 2, y: 2 }}
          end={{ x: 0, y: 0 }}
          style={styles.box1}
        >
          <Text style={appTheme.title}>
            {`Bienvenido, ${authState.userName}`} 
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
              onPress={() => navigation.navigate('GraficosScreen')}
              title="GRÁFICOS"
              icon='bar-chart-o'
            />
            <CrudCard
              onPress={() => navigation.navigate('EstresScreen')}
              title="ESTRÉS"
              icon="refresh"
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
    backgroundColor: "white",
    alignItems: 'center',
  }
})