import React, { useContext, useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackUserParams } from "../../navigator/UserNavigator";
import { useOneUser } from "../../hooks/useOneUser";
import { SendButton } from "../../components/SendButton";
import { ProfileUser } from "../../components/ProfileUser";

export const ProfileUserScreen = () => {
  const { authState } = useContext(AuthContext);
  const navigation = useNavigation<StackNavigationProp<RootStackUserParams>>();
  const { isLoading, userOne, loadUser } = useOneUser({
    id_user: authState.id_user,
  });
  const isFocused = useIsFocused();
  useEffect(() => {
    loadUser();
  }, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.box1}>
        <View style={styles.circleOut}>
          <View style={styles.circleMid}>
            <View style={styles.circleIn}>
              <Image
                style={styles.image}
                source={
                  userOne?.image
                    ? {
                        uri: `data:image/jpeg;base64,${userOne.image}`,
                      }
                    : require("../../../assets/user.jpg")
                }
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.btn}>
          <SendButton
            onPress={() => {
              if (userOne) {
                navigation.navigate("EditUserScreen", { user: userOne });
              }
            }}
            background="rgb(255,152,0)"
            title="Editar mi perfil"
          />
        </View>
        {isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator
              color="black"
              size={60}
              style={{ height: 100 }}
            />
          </View>
        ) : (
          <ProfileUser
            user={userOne}
            onRefresh={loadUser}
            isRefreshing={isLoading}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  box1: {
    flex: 4.9,
    justifyContent:"flex-end",
    alignItems: "center",
  },
  info: {
    flex: 5.1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 250,
    marginHorizontal: 30,
  },
  circleOut: {
    width: 330,
    height: 330,
    borderRadius: 200,
    backgroundColor: "rgba(255, 152, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  circleMid: {
    width: 280,
    height: 280,
    borderRadius: 200,
    backgroundColor: "rgba(255, 152, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  circleIn: {
    width: 220,
    height: 220,
    borderRadius: 150,
    backgroundColor: "rgba(255, 152, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
