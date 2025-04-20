import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ActivityIndicator, 
  RefreshControl
} from "react-native";
import {
  LineChart,
  ProgressChart,
  PieChart,
  BarChart,
} from "react-native-chart-kit";
import { useSensorApi } from "../../hooks/useSensorApi";
import { appTheme } from "../../themes/appTheme";

export const GraficosScreen = () => {
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

  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  if ((bpmLoading || gsrLoading) && (bpmData.length === 0 || gsrData.length === 0)) {
    return (
      <View style={{
        ...appTheme.globalContainer,
      }}>
        <ActivityIndicator
          color="black"
          size={75}
        />
      </View>
    );
  }
  return (
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
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  graph: {
    borderRadius: 20,
    marginBottom: 20,
    elevation: 2,
  },
});