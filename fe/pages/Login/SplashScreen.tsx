import { ImageBackground, StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
const SplashScreen = () => {
  return (
    <View>
      <Image
        style={style.splash}
        source={require("../../assets/login&register/splash.png")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  splash: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
