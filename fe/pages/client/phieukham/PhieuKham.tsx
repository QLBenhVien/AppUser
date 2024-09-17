import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../../components/Header";
import ListPhieu from "./components/ListPhieu";
import Phieu from "../phieukham/DetailPhieuKham";
import axios from "axios";

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

const Stack = createNativeStackNavigator();

const PhieuKham = ({ navigation }) => {
  const handlePress = (id: any, tenkhoa: any) => {
    navigation.navigate("Chi tiết", { id, tenkhoa });
  };

  const [dataphieu, setDataphieu] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/user/phieukham", {})
      .then(function (res) {
        setDataphieu(res.data.data);
        console.log(dataphieu);
      })
      .catch(function (error) {});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
          options={{ headerShown: false }}
          component={() => <ListPhieu data={dataphieu} onPress={handlePress} />}
        />
        <Stack.Screen name="Chi tiết" component={Phieu} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default PhieuKham;
