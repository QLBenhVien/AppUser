import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./pages/Login/login";
import SplashScreen from "./pages/Login/SplashScreen";
import RegisterScreen from "./pages/Login/register";
import ForgotScreen from "./pages/Login/forgotpassScreen";
import CodeconfirmScreen from "./pages/Login/codeconfirm";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  // const [isShowSplash, setIsShowSplass] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShowSplass(false);
  //   }, 3000);
  // });
  // return <>{isShowSplash ? <SplashScreen /> : <LoginScreen />}</>;
  // const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <OurApp />
    </NavigationContainer>
  );
}

export const OurApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registor" component={RegisterScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
