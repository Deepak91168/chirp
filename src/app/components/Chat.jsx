import { useState, useEffect } from "react";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [recipientEmail, setRecipientEmail] = useState(""); // New state for recipient's email
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [userEmail, setUserEmail] = useState(""); // New state for user's email
  const makeConnection = (e) => {
    e.preventDefault();
    const newSocket = new WebSocket(`ws://localhost:8000/ws/${userEmail}`);
    newSocket.onopen = () => {
      console.log("WebSocket connected");
    };
    setSocket(newSocket);
  };
  const closeConnection = () => {
    if (socket) {
      socket.close();
    }
  };
  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        console.log("Message received: ");
        const receivedMessage = event.data;
        setReceivedMessages((prevMessages) => [
          ...prevMessages,
          receivedMessage,
        ]);
      };
    }
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (socket && message.trim() !== "" && recipientEmail.trim() !== "") {
      const formattedMessage = `To:${recipientEmail}:${message}`;
      socket.send(formattedMessage);
      //   setMessage(""); // Clear the message input field
    }
  };

  return (
    <div>
      <h1>User is {userEmail}</h1>
      <form action="" className="p-4 border-2 text-center">
        <div>
          <label>Sender&lsquo;s Email:</label>
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Sender's Email"
          />
        </div>
        <button type="submit" className="border-2 p-4" onClick={makeConnection}>
          make connection
        </button>
      </form>

      <form action="" className="p-4 mt-4 border-2 text-center">
        <div>
          <label>Recipient&lsquo;s Email:</label>
          <input
            type="text"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="Recipient's Email"
          />
        </div>
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </form>

      <div className="text-center mt-4 border-2 p-4">
        <h2>Received Messages</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;
