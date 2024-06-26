import React from "react";
import { Text, View, SafeAreaView, ScrollView, Dimensions, StyleSheet,TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

const TaiKhoan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <MaterialIcons
                name="account-circle"
                size={width * 0.15}
                color="#CCCCCC"
              />
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}} >Trần Đức An</Text>
          <Text style={{ fontSize: 18,marginBottom: 10,}}>0943547334</Text>
          <Text style={styles.text}>TranDucAn23504@gmail.com</Text>
        </View>
        <View style={styles.Bodycontainer}>
          <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
            <View  style={styles.iconText}>
             <MaterialIcons name="schedule" size={width * 0.1} color='#E99C00' />
             <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Lịch sử khám</Text>
            </View>
            <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
          </TouchableOpacity>
          <View style={styles.chung}>
            <Text style={{fontSize:16,fontWeight:'500'}}>Chung</Text>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="person" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Thông tin tài khoản</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="lock" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Đổi Mật Khẩu</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
          </View>
          <View style={styles.khac}>
            <Text style={{fontSize:16,fontWeight:'500'}}>khác</Text>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="menu-book" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Hướng dẫn sử dụng</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="book" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Điều khoản và điều kiện sử dụng</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="check-circle" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Chính sách bảo mật</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="insert-drive-file" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Quy định sử dụng</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="help-outline" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >các vấn đề thường gặp</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',padding:width*0.04}}>
              <View  style={styles.iconText}>
                <MaterialIcons name="people" size={width * 0.1} color='#E99C00' />
                <Text style={{paddingLeft:5,fontSize:20,fontWeight:"500"}} >Giới thiệu</Text>
              </View>
              <MaterialIcons name="chevron-right" size={width * 0.09} color="gray"/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:height*0.2,paddingTop:width*0.1,backgroundColor:'rgba(196, 234, 250, 0.3)'}}>
           <View style={styles.btnlogout}>
              <TouchableOpacity
                style={styles.button1}
              >
                <Text style={styles.buttonText}>Đăng Xuất</Text>
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
    backgroundColor:'#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    height: height * 0.13, 
    backgroundColor: "#22668E",
    borderBottomLeftRadius: width * 0.15,
    borderBottomRightRadius: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingBottom: height * 0.02,
  },
  avatarContainer: {
    position: "absolute",
    bottom: -(width * 0.1), 
    alignSelf: "center",
  },
  avatar: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.2 / 2, 
    borderWidth: 3,
    borderColor: "white", 
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: width * 0.1,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine:'underline',
  },
  Bodycontainer:{
    borderTopColor:"rgba(196, 234, 250, 0.3)",
    borderTopWidth:15,
    height :height*0.85,
  },
  iconText:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  chung:{
    borderTopColor:"rgba(196, 234, 250, 0.3)",
    borderTopWidth:15,
  },
  khac:{
    borderTopColor:"rgba(196, 234, 250, 0.3)",
    borderTopWidth:15,
  },
  btnlogout:{
    height: 60,
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#22668E",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaiKhoan;
