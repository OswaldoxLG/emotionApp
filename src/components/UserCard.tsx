import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackAdminParams } from "../navigator/AdminNavigator";
import { UserResponse } from "../interfaces/userInterfaces";

interface Props {
  user: UserResponse;
}

export const UserCard = ({ user }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackAdminParams>>();
  const { width } = Dimensions.get("window");

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate("ShowUserScreen", { user: user });
      }}
    >
      <View
        style={{
          ...styles.cardContainer,
          width: width * 0.9,
        }}
      >
        <Image
          style={styles.img}
          source={
            user.image
              ? { uri: `data:image/jpeg;base64,${user.image}` }
              : require("../../assets/user.jpg")
          }
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>
            {user?.username
              ? `Username:\n ${user.username}`
              : "Nombre no disponible"}
          </Text>
          <Text style={styles.text2}>
            {user?.email ? `Correo:\n ${user.email}` : "Correo no disponible"}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.editButton}
          onPress={() => navigation.navigate("FormUserScreen", { user: user })}
        >
          <FontAwesome name="edit" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    marginBottom: 25,
    borderRadius: 20,
    backgroundColor: "rgb(255,152,0)",
    overflow: "hidden",
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  text1: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  text2: {
    color: "gray",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 5,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
