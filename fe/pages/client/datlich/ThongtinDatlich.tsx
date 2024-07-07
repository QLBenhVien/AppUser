import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ThongTinDatLichScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.headerTitle}>Kiểm tra thông tin</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeader}>Thông tin cá nhân</Text>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Họ và tên:</Text>
            <Text style={styles.value}>Trần Đức An</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Mã số:</Text>
            <Text style={styles.value}>123456</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Giới tính:</Text>
            <Text style={styles.value}>Nam</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Ngày sinh:</Text>
            <Text style={styles.value}>23/05/2004</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Địa chỉ:</Text>
            <Text style={styles.value}>Trường Xuân, Tháp Mười, Đồng Tháp</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Số điện thoại:</Text>
            <Text style={styles.value}>0123456789</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>example@example.com</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: height * 0.02,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.01,
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
  infoContainer: {
    borderRadius: 10,
    padding: width * 0.04,
    marginVertical: height * 0.02,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    width: width * 0.9,
  },
  infoHeader: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    marginBottom: height * 0.02,
    textAlign: "center",
    borderBottomWidth: 1, 
    borderBottomColor: "rgba(196, 234, 250, 0.3)",
    paddingBottom: height * 0.01,
  },
  infoItem: {
    flexDirection: "row",
    marginBottom: height * 0.03,
  },
  label: {
    fontWeight: "bold",
    width: width * 0.3,
  },
  value: {
    flex: 1,
  },
  buttonContainer: {
    width: width * 0.9,
    marginVertical: height * 0.02,
  },
  button: {
    backgroundColor: "#22668E",
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    alignItems: "center",
    marginVertical: height * 0.01,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: RFPercentage(2),
    fontWeight: "bold",
  },
});

export default ThongTinDatLichScreen;
