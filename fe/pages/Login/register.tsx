import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

const RegisterScreen = () => {
  const [selectedSex, setSelectedSex] = useState<string | null>(null);

  const options = ['Nam', 'Nữ'];

  function pickSex(sex: string) {
    setSelectedSex(sex);
  }
  const handleRegisterPress = () => {
    Alert.alert('Đăng ký thành công');
  };
  const handleLoginPress = () => {
   Alert.alert('Chuyển trang');
 };
 const handleforgotPassPress = () => {
   Alert.alert('Chuyển trang');
 };
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={require("../../assets/login&register/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.headercontainer}>
          <ImageBackground
            source={require("../../assets/logo.png")}
            style={styles.logo}
            imageStyle={styles.imglogo}
          />
          <Text style={styles.textlogo}>UCM</Text>
        </View>
        <View style={styles.bodycontainer}>
          <View style={styles.Infor}>
            <TextInput style={styles.Inputinfor} placeholder="Nhập họ và tên " />
            <TextInput style={styles.Inputinfor} placeholder="Nhập số điện thoại" />
          </View>

          <View style={styles.CheckBoxContainer}>
            {options.map(option => (
              <View key={option} style={styles.Sex}>
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    selectedSex === option && styles.selectedCheckbox
                  ]}
                  onPress={() => pickSex(option)}
                >
                  {selectedSex === option && (
                    <Icon name="check" size={20} color="#fff" />
                  )}
                </TouchableOpacity>
                <Text style={styles.Option}>{option}</Text>
              </View>
            ))}
          </View>
          <View style={styles.Infor}>
            <TextInput style={styles.Inputinfor} placeholder="Nhập Email" />
            <TextInput style={styles.Inputinfor} placeholder="Nhập mật khẩu" secureTextEntry />
            <TextInput style={styles.Inputinfor} placeholder="Nhập lại mật khẩu" secureTextEntry />
          </View>
        </View>
        <View style={styles.btnRegister}>
          <TouchableOpacity style={styles.button1} onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Account}><Text>Bạn đã có tài khoản?</Text></View>
        <View style={styles.btnLogin}>
          <TouchableOpacity style={styles.button2} onPress={handleLoginPress}>
          <Text style={[styles.buttonText, { color: 'black' }]}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fogetPass}>
            <TouchableOpacity onPress={handleforgotPassPress}>
                <Text style={styles.fogetPassText}>Quên mật khẩu?</Text>
           </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RegisterScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headercontainer: {
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 150,
  },
  imglogo: {
    borderRadius: 125,
    overflow: "hidden",
  },
  textlogo: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  bodycontainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 60,
  },
  Infor: {
    paddingHorizontal: 15,
  },
  Inputinfor: {
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    fontSize: 16,
    marginVertical: 5,
    backgroundColor: '#B8CCD7',
  },
  CheckBoxContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingTop: 5,
  },
  Sex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedCheckbox: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#B8CCD7',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Option: {
    fontSize: 16,
    marginLeft: 5,
  },
  btnRegister: {
    marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
  },
  button1: {
    backgroundColor: '#22668E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Account:{
   justifyContent:'center',
   alignItems:'center',
   fontWeight:"bold",
   color:'Baclk'
  },
  btnLogin:{
   marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
 },
 button2:{
   backgroundColor: '#B8CCD7',
   paddingVertical: 10,
   paddingHorizontal: 20,
   justifyContent:'center',
   alignItems:'center',
   borderRadius: 25,
   height: '100%',
   marginHorizontal: 15,
 },
 fogetPass:{
   paddingHorizontal: 20,
   justifyContent: 'center',
   alignItems:'center',
 },
 fogetPassText:{
   fontSize:18,
   fontWeight: 'bold',
   color: '#rgb(0, 0, 255)',
   textDecorationLine:'underline',
 },
});
