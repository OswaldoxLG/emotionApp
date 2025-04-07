import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import {
  LineChart,
  ProgressChart,
  PieChart,
  BarChart,
} from "react-native-chart-kit";
import { appTheme } from "../../themes/appTheme";

export const GraficosScreen = () => {
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

  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={appTheme.nametxt}>
          Últimos registros de la frecuencia cardiaca
        </Text>
        <LineChart
          data={{
            labels: ["Enero", "Febrero", "Marzo", "Abril"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
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
          data={{
            labels: ["Enero", "Febrero", "Marzo", "Abril"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          chartConfig={charConfig}
          width={width * 0.9}
          height={height * 0.3}
          yAxisLabel=" bpm "
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginHorizontal: 15,
  },
  graph: {
    borderRadius: 20,
    marginBottom: 20,
    elevation: 2,
  },
});
