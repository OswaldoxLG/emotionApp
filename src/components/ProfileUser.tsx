import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  RefreshControl,
} from "react-native";
import { UserResponse } from "../interfaces/userInterfaces";

interface Props {
  user: UserResponse | null;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export const ProfileUser = ({ user, onRefresh, isRefreshing }: Props) => {
  const { width } = Dimensions.get("window");

  const renderSex = (sex: string | undefined) => {
    if (sex === "M") {
      return "Masculino";
    } else if (sex === "F") {
      return "Femenino";
    }
    return sex || "";
  };

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        width: width * 1,
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={["pink"]}
          progressBackgroundColor={"black"}
        />
      }
    >
      <View style={styles.mainContainer}>
        {(user?.name || user?.lastname) && (
          <View style={styles.nameLast}>
            <Text style={styles.subtitle} numberOfLines={2}>
              {user?.name || ""}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              {`${user?.lastname}` || ""}
            </Text>
          </View>
        )}

        {(user?.username || user?.email) && (
          <View style={styles.usermail}>
            <Text style={styles.subtitle} numberOfLines={2}>
              <Text style={styles.subText}>Username:</Text>{" "}
              {user?.username || ""}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              {user?.email || ""}
            </Text>
          </View>
        )}

        {(user?.phone || user?.sex) && (
          <View style={styles.boxText}>
            <Text style={styles.subtitle} numberOfLines={2}>
              <Text style={styles.subText}>Telefono:</Text> {user?.phone || ""}
            </Text>
            <Text style={styles.subtitle} numberOfLines={2}>
              <Text style={styles.subText}>Sexo:</Text> {renderSex(user?.sex)}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 15,
    gap: 15,
  },
  nameLast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 10,
    width: 300,
    paddingHorizontal: 10,
  },
  usermail: {
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 10,
    height: 90,
    width: 300,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  subtitle: {
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal: 15,
    flexShrink: 1,
  },
  subText: {
    fontWeight: "100",
    color: "rgb(103, 102, 102)",
    fontStyle: "italic",
    fontFamily: "sans-serif",
  },
  boxText: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 10,
    width: 300,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
