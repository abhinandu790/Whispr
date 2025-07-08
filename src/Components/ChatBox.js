import { useEffect, useState } from "react";
import socket from "../socket"; // 👈 Make sure this is created as shown before

const ChatBox = ({ currentUser, selectedUser }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // Join user's own room when they load the chat
  useEffect(() => {
    if (currentUser?._id) {
      socket.emit("join", currentUser._id);
    }
  }, [currentUser]);

  // Receive messages
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, { from: data.from, message: data.message }]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      from: currentUser._id,
      to: selectedUser._id,
      message
    };

    // Emit to socket
    socket.emit("send_message", msgData);

    // Add to own chat window
    setChat((prev) => [...prev, { from: currentUser._id, message }]);
    setMessage("");
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={msg.from === currentUser._id ? "my-msg" : "their-msg"}
          >
            {msg.message}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
