import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AdminAuth.css';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/admin/register", data);
      if (res.data.success) {
        alert(res.data.message);
        navigate("/admin/login");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Register failed");
    }
  };

  return (
    <form onSubmit={handleRegister} className="admin-form">
      <h2>Admin Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default AdminRegister;
