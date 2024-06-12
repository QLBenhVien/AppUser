import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./pages/Login/login";
import SplashScreen from "./pages/Login/SplashScreen";
import { useEffect, useState } from "react";

export default function App() {
  const [isShowSplash, setIsShowSplass] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplass(false);
    }, 3000);
  });
  return <>{isShowSplash ? <SplashScreen /> : <LoginScreen />}</>;
}

const styles = StyleSheet.create({});
