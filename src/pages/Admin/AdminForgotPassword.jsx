import { useState } from "react";
import axios from "axios";
import './AdminAuth.css';

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/admin/forgot-password", { email });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Error sending reset link");
    }
  };

  return (
    <form onSubmit={handleForgot} className="admin-form">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your admin email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default AdminForgotPassword;
