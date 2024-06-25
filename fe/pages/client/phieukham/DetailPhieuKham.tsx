import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");
import Header from "../../../components/Header";

const DetailPhieuKham = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header content="Phiếu khám bệnh" />
      <ScrollView>
        <View style={styles.Bodycontainer}>
          <View style={styles.LogoUMC}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={{fontSize: 28,fontWeight: "bold",}}>PHÒNG KHÁM UMC</Text>
              <Text style={{fontSize: 14,}}>Chất lượng - Cảm thông - Vững tiến</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: width * 0.1 }}>
            <Text style={{ fontSize: 33, fontWeight: "bold", marginHorizontal: 20 }}>PHIẾU KHÁM BỆNH</Text>
            <Text style={{ fontSize: 25 }}>
                (Mã Phiếu: <Text style={styles.maphieu}>00000</Text>)
            </Text>
          </View>
          <View style={styles.maQR}>
            <Image
              source={require("../../../assets/Home/AI.png")}
              style={styles.imageQR}
            />
          </View>
          <View style={styles.speciality}>
            <Text style={styles.phongkham}> Khám Nội Lầu 1 Khu A </Text>
            <Text style={{fontSize:23,marginTop:8,}}> Phòng Khám: <Text style={styles.phongkham}>Phòng 25</Text></Text>
            <Text style={{fontSize:25,marginTop:8,}}> Chuyên Khoa: <Text style={styles.phongkham}>TAI MŨI HỌNG</Text></Text>
            <Text style={styles.STT}>24</Text>
          </View>
          <View style={styles.inforcontainer}>
            <Text style={{fontSize:23,marginTop:8}}> Ngày Khám: <Text style={styles.infor}>00-00-00 (Buổi sáng)</Text></Text>
            <Text style={{fontSize:23,marginTop:8}}> Giờ dự kiến: <Text style={styles.infor}>00-00</Text></Text>
            <Text style={{fontSize:23,marginTop:8}}> Họ Và Tên: <Text style={styles.infor}>Trần Đức An</Text></Text>
            <Text style={{fontSize:23,marginTop:8}}> Giới Tính: <Text style={styles.infor}>Nam</Text></Text>
            <Text style={{fontSize:23,marginTop:8}}> Năm Sinh: <Text style={styles.infor}>2004</Text></Text>
            <Text style={{fontSize:23,marginTop:8}}> Tỉnh/TP: <Text style={styles.infor}>Đồng Tháp</Text></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Scocontainer: {
    flex: 1,   
  },
  Bodycontainer: {
    flex: 1,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  LogoUMC: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: width * 0.2,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2, 
    resizeMode: "contain",
    marginRight: 10, 
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center", 
  },
  maphieu:{
    fontSize:25,
  },
  maQR:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * 0.02,
  },
  imageQR:{
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
    backgroundColor:'#000',
  },
  speciality:{
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  phongkham:{
    fontSize:25,
    textAlign:'center',
  },
  STT:{
    padding:20,
    fontSize:100,
    color:'#00ADEE',
  },
  inforcontainer:{
    height: height*0.3,
    alignSelf: 'flex-start'
  },
  infor:{
    fontSize:20,
  }
});

export default DetailPhieuKham;
