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

const RegisterScreen: React.FC = () => {
       const [selectedSex, setSelectedSex] = useState<string | null>(null);
      const [fullName, setFullName] = useState<string>('');
      const [phoneNumber, setPhoneNumber] = useState<string>('');
      const [email, setEmail] = useState<string>('');
      const [password, setPassword] = useState<string>('');
      const [confirmPassword, setConfirmPassword] = useState<string>('');

       const [fullNameError, setFullNameError] = useState<string>('');
      const [phoneNumberError, setPhoneNumberError] = useState<string>('');
      const [emailError, setEmailError] = useState<string>('');
        const [passwordError, setPasswordError] = useState<string>('');
        const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const options = ['Nam', 'Nữ'];

  function pickSex(sex: string) {
    setSelectedSex(sex);
  }
  
  const handleLoginPress = () => {
    Alert.alert('Chuyển trang');
  };
  
  const handleforgotPassPress = () => {
    Alert.alert('Chuyển trang');
  };

  const handleRegisterPress = () => {
    let isValid = true;

    if (fullName.length < 3) {
      setFullNameError('Họ và tên phải có ít nhất 3 ký tự');
      isValid = false;
    } else {setFullNameError('');
    }

    if (phoneNumber.length < 10) {setPhoneNumberError('Số điện thoại phải có ít nhất 10 ký tự');
      isValid = false;
    } else {
      setPhoneNumberError('');
    }

    if (!email.includes('@')) {
      setEmailError('Email không hợp lệ');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Mật khẩu phải có ít nhất 6 ký tự');
      isValid = false;
    } else 
    {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Mật khẩu và xác nhận mật khẩu không khớp');
      isValid = false;
    } else
     {
      setConfirmPasswordError('');
    }

    if (isValid) {
      Alert.alert('Đăng ký thành công');
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              <TextInput 
                style={[
                  styles.Inputinfor, 
                  fullNameError ? { borderColor: 'red' } : {}
                ]}
                placeholder="Nhập họ và tên"
                maxLength={50}
                value={fullName}
                onChangeText={setFullName}
              />
              <View style={styles.errorContainer}>
                {fullNameError ? <Text style={styles.errorText}>{fullNameError}</Text> : null}
              </View>

              <TextInput 
                style={[
                  styles.Inputinfor, 
                  phoneNumberError ? { borderColor: 'red' } : {}
                ]}
                placeholder="Nhập số điện thoại"
                keyboardType="phone-pad"
                maxLength={15}
                value={phoneNumber}
                onChangeText={setPhoneNumber} 
              />
              <View style={styles.errorContainer}>
                {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
              </View>
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
              <TextInput 
                style={[
                  styles.Inputinfor, 
                  emailError ? { borderColor: 'red' } : {}
                ]}
                placeholder="Nhập Email"
                maxLength={50}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <View style={styles.errorContainer}>
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
              </View>

              <TextInput 
                style={[
                  styles.Inputinfor, 
                  passwordError ? { borderColor: 'red' } : {}
                ]}
                placeholder="Nhập mật khẩu"
                secureTextEntry
                maxLength={20}
                value={password}
                onChangeText={setPassword} 
              />
              <View style={styles.errorContainer}>
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
              </View>

              <TextInput  
                style={[
                  styles.Inputinfor, 
                  confirmPasswordError ? { borderColor: 'red' } : {}
                ]}
                placeholder="Nhập lại mật khẩu"
                secureTextEntry
                maxLength={20}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <View style={styles.errorContainer}>
                {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
              </View>
            </View>
          </View>
          <View style={styles.btnRegister}>
            <TouchableOpacity style={styles.button1} onPress={handleRegisterPress}>
              <Text style={styles.buttonText}>Đăng Ký</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Account}>
            <Text>Bạn đã có tài khoản?</Text>
          </View>
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
      </ScrollView>
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
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  headercontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 10,
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
    marginTop: '60%',
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
    justifyContent: 'space-around',
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
  Account: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: "bold",
    color: 'Black',
  },
  btnLogin: {
    marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
  },
  button2: {
    backgroundColor: '#B8CCD7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: '100%',
    marginHorizontal: 15,
  },
  fogetPass: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fogetPassText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 255)',
    textDecorationLine: 'underline',
  },
  errorContainer: {
    height: 20, // Chiều cao cố định để không thay đổi kích thước
  },
  errorText: {
    color: 'red',
  },
});
