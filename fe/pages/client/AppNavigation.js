import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//screens
import TaiKhoan from "./taikhoan/TaiKhoan";
import ThongTinTK from "./account/ThongtinTaiKhoan";
import DatKhamBS from "./datlich/DatKhamBS";
import DatKhamNgay from "./datlich/DatkhamNgay";

import ThongTinHoSo from "./datlich/ThongtinDatlich";
import ChinhSuaThongTinHS from "./datlich/ChinhSuaThongTinDatKham";
//dataUser

export default AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TaiKhoan" component={TaiKhoan} />
      <Stack.Screen name="ThongTinTaiKhoan" component={ThongTinTK} />
      <Stack.Screen name="DatKhamBS" component={DatKhamBS} />
      <Stack.Screen name="DatKhamNgay" component={DatKhamNgay} />
      <Stack.Screen name="ThongTinHoSo" component={ThongTinHoSo} />
      <Stack.Screen name="ChinhSuaThongTinHS" component={ChinhSuaThongTinHS} />
    </Stack.Navigator>
  );
};
