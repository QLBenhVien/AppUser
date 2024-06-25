import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from "react-native";

import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";
import ListPhieu from "./components/ListPhieu";
import DetailPhieuKham from "./DetailPhieuKham";
const phieuData = [
  {
    room: "Phòng 25",
    specialization: "Tai Mũi Họng",
  },
  {
    room: "Phòng 20",
    specialization: "Da Liễu",
  },
  {
    room: "Phòng 21",
    specialization: "Cấp cứu"
  },
  {
    room: "Phòng 23",
    specialization: "Nhi",
  },
  {
    room: "Phòng 22",
    specialization: "Thần kinh",
  },
];
const PhieuKham = () => {
  

  return (
    <SafeAreaView style={styles.Container}>
      <Header content="Phiếu khám bệnh" />
      { <ListPhieu data={phieuData} />}
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
