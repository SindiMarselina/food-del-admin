import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminAuth.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  // 👉 Submit Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/admin/login", data);
      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        alert("Login berhasil");
        navigate("/admin/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  // 👉 Pindah ke Forgot Password
  const handleForgotPassword = () => {
    navigate("/admin/forgot-password");
  };

  return (
    <form onSubmit={handleLogin} className="admin-form">
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>

      {/* 👉 PENTING: type="button" agar TIDAK submit form */}
      <button type="button" onClick={handleForgotPassword}>
        Forgot Password
      </button>
    </form>
  );
};

export default AdminLogin;
