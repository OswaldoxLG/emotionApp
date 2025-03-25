import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <AppState>
          <DrawerNavigator />
        </AppState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const AppState = ( { children } : { children:ReactNode }) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}

export default App;
