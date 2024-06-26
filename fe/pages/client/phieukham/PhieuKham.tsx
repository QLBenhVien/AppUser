import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";
import ListPhieu from "./components/ListPhieu";
import Phieu from "../phieukham/DetailPhieuKham";
const phieuData = [
  {
    id: 1,
    room: "Phòng 25",
    specialization: "Tai Mũi Họng",
  },
  {
    id: 2,
    room: "Phòng 20",
    specialization: "Da Liễu",
  },
  {
    id: 3,
    room: "Phòng 21",
    specialization: "Cấp cứu",
  },
  {
    id: 4,
    room: "Phòng 23",
    specialization: "Nhi",
  },
  {
    id: 5,
    room: "Phòng 22",
    specialization: "Thần kinh",
  },
];
const PhieuKham = ({ navigation }) => {
  const handlePress = (room: String) => {
    navigation.navigate("Chi tiết");
  };
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.Container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#22668E",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Phiếu khám bệnh"
          component={() => <ListPhieu data={phieuData} onPress={handlePress} />}
        />
        <Stack.Screen name="Chi tiết" component={Phieu} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: "83%",
    flex: 1,
    marginBottom: "18%",
  },
});

export default PhieuKham;
