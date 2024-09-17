import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

interface DataItem {
  id: string;
  room: number;
  specialization: {
    _id: string;
    tenkhoa: string;
  };
}

interface ListPhieuProps {
  data: DataItem[];
  onPress: (id: String, tenkhoa: String) => void;
}

const ListPhieu: React.FC<ListPhieuProps> = ({ data, onPress }) => {
  const RenderItem = ({ item }: { item: DataItem }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(item.id, item.specialization.tenkhoa)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textcontent}>Phòng khám: {item.room} </Text>
        <Text style={styles.textcontent}>
          Chuyên khoa: {item.specialization.tenkhoa}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContentContainer}
    />
  );
};

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
  imageContainer: {
    height: "90%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: width * 0.256,
    width: "90%",
    marginTop: "10%",
  },
  textContainer: {
    height: "100%",
    width: "70%",
    justifyContent: "center",
  },
  textcontent: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "5%",
    marginVertical: "2%",
  },
});

export default ListPhieu;
