import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import { UserDetail } from "../../components/UserDetails";
import { RootStackAdminParams } from "../../navigator/AdminNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { useOneUser } from "../../hooks/useOneUser";
import { appTheme } from "../../themes/appTheme";

interface Props
  extends StackScreenProps<RootStackAdminParams, "ShowUserScreen"> {}

export const ShowUserScreen = ({ route }: Props) => {
  const { user } = route.params;
  const { id_user } = user;
  const { userOne, isLoading } = useOneUser(id_user);

  // useEffect(() => {
  //   console.log("UserOne completo:", JSON.stringify(userOne, null, 2));
  // }, [userOne]);

  return (
    <View style={styles.mainBox}>
      <LinearGradient
        style={styles.box1}
        colors={["#00e7ff", "#ff9800"]}
        start={{ x: 2, y: 2 }}
        end={{ x: 0, y: 0 }}
      >
        <Text
          style={{
            ...appTheme.title,
            marginTop: 60
          }}
        >
          Detalles del usuario
        </Text>
      </LinearGradient>
      <View style={styles.box2}>
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
          <UserDetail user={userOne} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    marginTop: 0,
    marginBottom: 20,
  },
  box1: {
    flex: 3,
    marginBottom: 20
  },
  box2: {
    flex: 7,
  },
});
