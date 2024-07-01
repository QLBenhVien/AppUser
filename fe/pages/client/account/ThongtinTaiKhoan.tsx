import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize"; // Import RFPercentage

const { width, height } = Dimensions.get("window");
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "../../../components/Header";

import { UserContext } from "../../context/UserContext";
const DetailTaiKhoan = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  const options = ["Nam", "Nữ"];
  const [selectedSex, setSelectedSex] = useState("Nam");

  function pickSex(sex: string) {
    setSelectedSex(sex);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header content="Chỉnh sửa thông tin" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <MaterialIcons
                name="account-circle"
                size={RFPercentage(10)} // Example: Adjusting based on RFPercentage
                color="#CCCCCC"
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text
              style={[styles.changeAvatarText, { fontSize: RFPercentage(3) }]}
            >
              Đổi ảnh đại diện
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.sectionTitle, { fontSize: RFPercentage(2) }]}>
          Thông tin cá nhân
        </Text>

        <View style={{ paddingBottom: height * 0.05 }}>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoLabel, { fontSize: RFPercentage(2.5) }]}>
              Họ và tên:
            </Text>
            <Text style={[styles.infoValue, { fontSize: RFPercentage(2.5) }]}>
              {user ? user.Ten : ""}
            </Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoLabel, { fontSize: RFPercentage(2.5) }]}>
              Ngày Sinh:
            </Text>
            <Text style={[styles.infoValue, { fontSize: RFPercentage(2.5) }]}>
              {user ? "" : ""}
            </Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoLabel, { fontSize: RFPercentage(2.5) }]}>
              Địa chỉ:
            </Text>
            <Text style={[styles.infoValue, { fontSize: RFPercentage(2.5) }]}>
              Trường Xuân, Tháp Mười, Đồng Tháp
            </Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoLabel, { fontSize: RFPercentage(2.5) }]}>
              CCCD:
            </Text>
            <Text style={[styles.infoValue, { fontSize: RFPercentage(2.5) }]}>
              08723064487
            </Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoLabel, { fontSize: RFPercentage(2.5) }]}>
              SDT:
            </Text>
            <Text style={[styles.infoValue, { fontSize: RFPercentage(2.5) }]}>
              0943547334
            </Text>
            <View style={styles.separator}></View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoLabel, { fontSize: RFPercentage(2.5) }]}>
              Giới Tính:
            </Text>
            <View style={styles.CheckBoxContainer}>
              {options.map((option) => (
                <View key={option} style={styles.Sex}>
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      selectedSex === option && styles.selectedCheckbox,
                    ]}
                    onPress={() => pickSex(option)}
                  >
                    {selectedSex === option && (
                      <MaterialIcons
                        name="check"
                        size={RFPercentage(2)}
                        color="#fff"
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={[styles.Option, { fontSize: RFPercentage(2.5) }]}
                  >
                    {option}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View
          style={{
            height: height * 0.2,
            justifyContent: "center",
            backgroundColor: "rgba(196, 234, 250, 0.3)",
          }}
        >
          <View style={styles.btnUpdate}>
            <TouchableOpacity style={styles.button2}>
              <Text
                style={[
                  styles.buttonText,
                  { color: "#ffffff", fontSize: RFPercentage(2.5) },
                ]}
              >
                Cập nhật
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height * 0.02,
    borderBottomWidth: 30,
    borderBottomColor: "rgba(196, 234, 250, 0.3)",
  },
  avatarContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (width * 0.3) / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  changeAvatarText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: "column",
    marginTop: 10,
    paddingHorizontal: width * 0.05,
  },
  infoLabel: {
    flex: 1,
    fontSize: 18,
    marginBottom: width * 0.04,
  },
  infoValue: {
    flex: 3,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: width * 0.03,
  },
  separator: {
    height: 1,
    backgroundColor: "#000",
    width: "100%",
    marginTop: width * 0.04,
  },
  CheckBoxContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingBottom: "2%",
  },
  Sex: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedCheckbox: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  checkbox: {
    width: width * 0.08,
    height: width * 0.08,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: (width * 0.08) / 2,
  },
  Option: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnUpdate: {
    height: 50,
    justifyContent: "center",
    marginTop: "5%",
  },
  button2: {
    backgroundColor: "#22668e",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    marginHorizontal: 15,
  },
});

export default DetailTaiKhoan;
