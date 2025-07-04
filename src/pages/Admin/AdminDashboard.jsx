import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:4000/api/admin/me", {
          headers: { token }
        });
        if (res.data.success) {
          setAdmin(res.data.admin);
        } else {
          navigate("/admin/login");
        }
      } catch (error) {
        console.error(error);
        navigate("/admin/login");
      }
    };

    fetchAdmin();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {admin ? (
        <div>
          <p><strong>Welcome:</strong> {admin.name}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading admin data...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
