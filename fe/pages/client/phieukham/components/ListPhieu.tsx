import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

interface DataItem {
  room: string;
  specialization: string;
}

interface ListPhieuProps {
  data: DataItem[];
}

const ListPhieu: React.FC<ListPhieuProps> = ({ data }) => {
  const navigation = useNavigation();
  const Renderitem = ({ item }: { item: DataItem }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log(item)}
    >
      <View
        style={{
          height: "90%",
          width: "30%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        ></Image>
      </View>
      <View
        style={{
          height: "100%",
          width: "70%",
          justifyContent: "center",
        }}
      >
        <Text style={styles.textcontent}>Phòng khám: {item.room} </Text>
        <Text style={styles.textcontent}>
          Chuyên khoa: {item.specialization}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    
    <FlatList
      data={data}
      renderItem={Renderitem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContentContainer}
    />
  );
};

export default ListPhieu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.18,
    marginTop: "3%",
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ccc",
  },
  listContentContainer: { paddingHorizontal: 8 },
  logo: {
    height: width * 0.256,
    width: "90%",
    marginTop: "10%",
  },
  imglogo: {
    borderRadius: 125,
    overflow: "hidden",
  },
  textcontent: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "5%",
    marginVertical: "2%",
  },
});
