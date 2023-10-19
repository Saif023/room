import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("server.js");

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      s;
      socket.disconnect();
    };
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      socket.emit("message", { text: newMessage, user: "You" });

      setNewMessage("");
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="message-user">{message.user}:</span>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
