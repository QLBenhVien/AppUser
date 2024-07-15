import React, { Component, useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../../../components/Header";
import axios from "axios";
import ThongBaoCard from "./listThongBao";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");
const ThongBao = () => {
  const [thongbao, SetThongbao] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/thongbao")
      .then(function (res) {
        const dataThongBao = res.data.data;
        SetThongbao(dataThongBao);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const handlePress = (item: any) => {
    console.log("da nhan");
  };

  console.log(thongbao);
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
        {thongbao === null ? (
          <Text>Không có thông báo</Text>
        ) : (
          <Text>Không có thông báo</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContainer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#22668E",
    paddingHorizontal: width * 0.03,
  },
  headerIcon: {},
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: RFPercentage(2.5),
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ThongBao;
