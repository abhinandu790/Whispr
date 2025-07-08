import { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchSidebarUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/users/sidebar", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.error("Sidebar user fetch error:", err);
      }
    };

    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data.user);
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };

    fetchSidebarUsers();
    fetchProfile();
  }, []);

  return (
    <div className="sidebar-inner">
      {/* Profile */}
      <div className="profile-section">
        <h3>{profile.userName}</h3>
        <p>{profile.userEmail}</p>
      </div>

      {/* Search */}
      <form>
        <input type="search" placeholder="Search Conversations..." />
      </form>

      <hr />

      {/* Users List */}
      <div className="user-list">
        {users.map((user) => (
          <div key={user._id} className="user-card" onClick={() => onSelectUser(user)}>
            <strong>{user.userName}</strong>
            <p>{user.userEmail}</p>
          </div>
        ))}
      </div>

      <button className="newchat">+ New Chat</button>
    </div>
  );
};

export default Sidebar;
