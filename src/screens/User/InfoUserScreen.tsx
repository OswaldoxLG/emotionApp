import React, { useEffect} from "react";
import { Text, View, ScrollView, SafeAreaView, Dimensions, StyleSheet, ActivityIndicator, RefreshControl } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";
import { useSensorApi } from "../../hooks/useSensorApi";
import { SensorIndicator } from "../../components/SensorIndicator";
import { appTheme } from "../../themes/appTheme";

export const InfoUserScreen = () => {
    const { data: bpmData, isLoading: bpmLoading, loadData: reloadBpm } = useSensorApi('bpm', 10);
    const { data: gsrData, isLoading: gsrLoading, loadData: reloadGsr } = useSensorApi('gsr', 10);
  
    const refreshData = () => {
      reloadBpm();
      reloadGsr();
    };
  
    useEffect(() => {
      const interval = setInterval(refreshData, 10000);
      return () => clearInterval(interval); 
    }, []);

    const charConfig = {
      backgroundColor: "white", // Fondo
      backgroundGradientFrom: "#1E90FF", // Inicio"#1E90FF"
      backgroundGradientTo: "#ffa61e", // Fin
      decimalPlaces: 0, // Número de decimales
      color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
      labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
      style: {
        borderRadius: 20,
      },
      propsForDots: {
        r: "5",
        strokeWidth: "2",
        stroke: "#1E90FF",
      },
    };

    const bpmChartData = {
      labels: bpmData.map((_, index) => (index + 1).toString()),
      datasets: [
        {
          data: bpmData.length > 0 
            ? bpmData.map(item => item.value) 
            : [0, 0, 0, 0], 
        },
      ],
    };
  
    const gsrChartData = {
      labels: gsrData.map((_, index) => (index + 1).toString()),
      datasets: [
        {
          data: gsrData.length > 0 
            ? gsrData.map(item => item.value) 
            : [0, 0, 0, 0], 
        },
      ],
    };

  if ((bpmLoading || gsrLoading) && (bpmData.length === 0 || gsrData.length === 0)) {
    return (
      <View style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMarging,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <ActivityIndicator
          color="black"
          size={75}
        />
      </View>
    );
  }
    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={bpmLoading || gsrLoading}
            onRefresh={refreshData}
            colors={["pink", "black", "violet"]}
            progressBackgroundColor="black"
          />
        }
      >
        <SensorIndicator
          title="Frecuencia Cardiaca"
          value={bpmData.length > 0 ? bpmData[0].value : 0}
          isLoading={bpmLoading}
          icon="heart"
        />
        <SensorIndicator
          title="Respuesta Gálvanica de la Piel"
          value={gsrData.length > 0 ? gsrData[0].value : 0}
          isLoading={gsrLoading}
          icon="bolt"
        />
        <Text style={appTheme.nametxt}>
          Últimos registros de la frecuencia cardiaca
        </Text>
        <LineChart
          data={bpmChartData}
          chartConfig={charConfig}
          width={width * 0.9}
          height={height * 0.3}
          yAxisLabel=" bpm "
          yAxisInterval={1}
          style={styles.graph}
        />
        <Text style={appTheme.nametxt}>
          Últimos registros de la respuesta gálvanica de la piel
        </Text>
        <LineChart
          data={gsrChartData}
          chartConfig={charConfig}
          width={width * 0.9}
          height={height * 0.3}
          yAxisLabel=" µS "
          yAxisInterval={1}
          style={styles.graph}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 45
  },
  graph: {
    borderRadius: 20,
    marginBottom: 20,
    elevation: 2,
  },
});