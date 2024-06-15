import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./pages/Login/login";
import SplashScreen from "./pages/Login/SplashScreen";
import RegisterScreen from "./pages/Login/register";
import ForgotScreen from "./pages/Login/forgotpassScreen";
import CodeconfirmScreen from "./pages/Login/codeconfirm";
import { useEffect, useState } from "react";

export default function App() {
  // const [isShowSplash, setIsShowSplass] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShowSplass(false);
  //   }, 3000);
  // });
  // return <>{isShowSplash ? <SplashScreen /> : <LoginScreen />}</>;
  return <ForgotScreen></ForgotScreen>;
}
const styles = StyleSheet.create({});
