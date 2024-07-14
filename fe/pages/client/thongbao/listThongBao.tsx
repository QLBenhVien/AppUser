import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface ThongBao {
  tieuDe: string;
  noiDung: string;
}

interface ThongBaoCardProps {
  thongBao: ThongBao;
  onPress: () => void;
}

const ThongBaoCard: React.FC<ThongBaoCardProps> = ({ thongBao, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{thongBao.tieuDe}</Text>
        <Text style={styles.message}>{thongBao.noiDung}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: width * 0.95,
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    paddingLeft: width * 0.025,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#000",
    marginBottom: width * 0.01,
  },
  message: {
    fontSize: width * 0.04,
    color: "#666",
  },
});

export default ThongBaoCard;
