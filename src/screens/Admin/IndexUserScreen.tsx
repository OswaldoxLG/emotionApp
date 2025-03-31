import React, { useEffect } from "react";
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { BtnNav } from "../../components/BtnNav";
import { SendButton } from "../../components/SendButton";
import { UserResponse } from "../../interfaces/userInterfaces";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackAdminParams } from "../../navigator/AdminNavigator";
import { UserCard } from "../../components/UserCard";
import { useUserApi } from "../../hooks/useUserApi";
import { appTheme } from "../../themes/appTheme";
export const IndexUserScreen = () => {

  const createUser: UserResponse = {
    id_user:        '',
    rol:            '',
    username:       '',
    name:           '',
    lastname:       '',
    sex:            '',
    email:          '',
    password:       '',
    phone:          '',
    image:          ''
  }

  const navigation = useNavigation<StackNavigationProp<RootStackAdminParams>>();

  const isFocused = useIsFocused();

  const { isLoading, loadUsers, listUser } = useUserApi();

  useEffect( () => {
    loadUsers();
  },[ isFocused ]);

  return (
    <View style={appTheme.globalContainer}>
<FlatList
        data={ Object.values( listUser )} //Convertir JSON a string
        keyExtractor={ (item) => '#'+item.id_user }
        ListHeaderComponent={(
            <View style={{ marginBottom: 40, marginTop: 20}}>
              <Text
                style={{
                  ...appTheme.title,
                  ...appTheme.globalMarging,
                }}
              >
                Lista de usuarios
              </Text>
              <SendButton
                title='CREAR USUARIO'
                background='rgb(41, 147, 39)'
                onPress={() => { navigation.navigate('FormUserScreen', { user: createUser })}}
              />
              {/* <BtnNav
                iconName="arrow-circle-left"
                position="bottom_left"
                onPress={() => { navigation.goBack() }}
              /> */}
            </View>
        )}        
        refreshControl={
          <RefreshControl
            refreshing= { (isLoading) }
            onRefresh={ loadUsers } 
            colors={["pink"]}
            progressBackgroundColor={"black"}
          />
        }
        numColumns={1}
        renderItem={ ( {item} ) => (
          <UserCard
            user={item}
          />
        )}
      />
    </View>
  );
}