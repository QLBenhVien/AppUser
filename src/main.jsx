import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Tạo Context
export const Context = createContext({
  isAuthenticated: false, // Mặc định người dùng chưa đăng nhập
  admin: {}, // Mặc định thông tin admin trống
  setIsAuthenticated: () => {},
  setAdmin: () => {},
});

const AppWrapper = () => {
  // Nếu muốn giả lập đã đăng nhập, có thể đặt mặc định như sau
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Giả lập đã đăng nhập
  const [admin, setAdmin] = useState({ name: "Admin" }); // Giá trị admin mẫu

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
