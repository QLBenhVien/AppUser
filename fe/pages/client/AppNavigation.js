import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//screens
import TaiKhoan from "./taikhoan/TaiKhoan";
import ThongTinTK from "./account/ThongtinTaiKhoan";

export default AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TaiKhoan" component={TaiKhoan} />
      <Stack.Screen name="ThongTinTaiKhoan" component={ThongTinTK} />
    </Stack.Navigator>
  );
};
