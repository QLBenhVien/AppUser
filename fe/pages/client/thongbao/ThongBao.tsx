import React from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView,TouchableOpacity,Dimensions } from "react-native";
import Header from "../../../components/Header";
import ThongBaoCard from "../../client/thongbao/listThongBao"; // Giả sử đường dẫn của bạn tới ThongBaoCard
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const ThongBao = () => {
  const thongBaoData = [
    {
      tieuDe: "Thông báo 1",
      noiDung: "Nội dung thông báo 1",
    },
    {
      tieuDe: "Thông báo 2",
      noiDung: "Nội dung thông báo 2",
    },
    {
      tieuDe: "Thông báo 3",
      noiDung: "Nội dung thông báo 3",
    },
  ];

  const handlePress = (item) => {
    console.log("Thông báo được nhấn:", item);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back"
            size={RFPercentage(4)}
            color="#FFFFFF"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Thông Báo</Text>
        </View>
      </View>
     
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {thongBaoData.map((item, index) => (
          <ThongBaoCard
            key={index}
            thongBao={item}
            onPress={() => handlePress(item)}
          />
        ))}
      </ScrollView>
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
