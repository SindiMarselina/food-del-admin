import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminAuth.css';

const AdminResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/admin/reset-password/${token}`, { password });
      alert(res.data.message);
      if (res.data.success) navigate("/admin/login");
    } catch (err) {
      console.error(err);
      alert("Reset failed");
    }
  };

  return (
    <form onSubmit={handleReset} className="admin-form">
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default AdminResetPassword;
