import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import socket from "../socket";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // Shared auth header
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Fetch users and profile
  useEffect(() => {
    const fetchSidebarUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/sidebar-users", config);
        console.log("✅ Users:", res.data);
        setUsers(res.data);
      } catch (error) {
        console.error("❌ Failed to load users:", error);
      }
    };

    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/profile", config);
        console.log("✅ Profile:", res.data);
        setProfile(res.data.user || res.data); // depends on your backend
      } catch (error) {
        console.error("❌ Profile fetch failed:", error);
      }
    };

    if (token) {
      fetchSidebarUsers();
      fetchProfile();
    } else {
      console.warn("⚠️ No token found in localStorage.");
    }
  }, [token]);

  // Fetch messages on user selection
  const handleUserClick = async (user) => {
    setSelectedUser(user);
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/messages/${user._id}`, authHeader);
      setMessages(res.data);
    } catch (err) {
      console.error("❌ Error loading messages:", err);
    }
  };

  // Send a new message
  const handleSendMessage = async () => {
    if (!messageInput.trim()) return;
    try {
      const payload = {
        receiverId: selectedUser._id,
        message: messageInput,
        avatar: profile?.avatar || "",
      };
      const res = await axios.post("http://localhost:5000/api/v1/messages", payload, authHeader);
      setMessages((prev) => [...prev, res.data]);
      socket.emit("sendMessage", res.data);
      setMessageInput("");
    } catch (err) {
      console.error("❌ Message send error:", err);
    }
  };

  // Socket message receive
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      if (data.sender === selectedUser?._id) {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [selectedUser]);

  return (
    <div className="mainpage">
      <div className="sidebar">
        <form>
          <input type="search" placeholder="Search Conversations..." />
        </form>
        <hr />
        <div className="user-list">
          {users.map((user) => (
            <div
              className={`user-item ${selectedUser?._id === user._id ? "active" : ""}`}
              key={user._id}
              onClick={() => handleUserClick(user)}
            >
              {user.userName}
            </div>
          ))}
        </div>
        <div className="new2">
          <button className="newchat">+ New Chat</button>
        </div>
      </div>

      <div className="center">
        {selectedUser ? (
          <>
            <h2>Chat with {selectedUser.userName}</h2>
            <div className="chat-window">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender === profile?._id ? "sent" : "received"}`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={messageInput}
                placeholder="Type a message..."
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <>
            <h1>Welcome to SecureChat</h1>
            <p>
              Select a conversation from the sidebar to start chatting with
              <br /> end-to-end encryption.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
