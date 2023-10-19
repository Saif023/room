import React, { useState, useEffect } from "react";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    e;
  }, []);

  // Function to send a new message
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      yourSocketInstance.emit("message", { text: newMessage });

      setMessages([...messages, { text: newMessage, user: "You" }]);

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
