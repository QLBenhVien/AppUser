import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Header from "../../../components/Header";

const ThongBao = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Header content="Thông báo" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "83%",
        }}
      >
        <Text>Không có thông báo</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default ThongBao;
