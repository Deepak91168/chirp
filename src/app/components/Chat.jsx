"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./common/NavBar";
import { BiSend } from "react-icons/bi";
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
        const stringWithoutSingleQuotes = receivedMessage.replace(/'/g, '"');
        const formattedMessage = JSON.parse(stringWithoutSingleQuotes);
        console.log("Received Message!: ", formattedMessage);
        setReceivedMessages((prevMessages) => [
          ...prevMessages,
          formattedMessage,
        ]);
      };
    }
  }, [socket]);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Sending message: ", message);
    const formattedMessage = {
      sender_email: userEmail,
      recipient_email: recipientEmail,
      content: message,
    };
    if (socket && message.trim() !== "" && recipientEmail.trim() !== "") {
      socket.send(JSON.stringify(formattedMessage));
      setMessage("");
    }
  };

  useEffect(() => {
    const getChatHistory = async () => {
      const response = await axios.get(
        `http://localhost:8000/chat/get-chat-history?sender_email=${userEmail}&recipient_email=${recipientEmail}`
      );
      console.log(response.data);
      setReceivedMessages(response.data);
    };
    getChatHistory();
  }, [userEmail, recipientEmail]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <h1>User is {userEmail}</h1>

      <div className="bg-[#444444] h-24 rounded-lg"></div>
      <div className="w-full rounded-lg mt-2 flex items-center">
        <textarea
          name="send-message"
          placeholder="Type a message"
          id="send-message"
          cols="30"
          rows="1"
          className="w-full p-4 rounded-lg outline-none"
        />
        <button type="button" className="bg-green-500 p-4 text-white">
          <BiSend className=" text-2xl" />
        </button>
        {/* <button className="p-4 bg-green-500 text-black">Send</button> */}
      </div>

      {/* <form action="" className="p-4 border-2 text-center">
        <div>
          <label>Sender&lsquo;s Email:</label>
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Sender's Email"
          />
        </div>
        <button
          type="submit"
          className="border-2 btn btn-neutral btn-sm"
          onClick={makeConnection}
        >
          make connection
        </button>
      </form> */}

      {/* <form action="" className="p-4 mt-4 border-2 text-center">
        <div>
          <label>Recipient&lsquo;s Email:</label>
          <input
            type="text"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="Recipient's Email"
          />
        </div>
        <div className="">
          <input
            type="text"
            value={message}
            className="border-2"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            className="btn btn-neutral w-32 rounded-lg"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </form> */}

      {/* <div className="text-center mt-4 border-2 p-4">
        <h2>Received Messages</h2>
        <ul>
          {receivedMessages.map((message, index) => (
            <li key={index} className="border-2 p-2">
              <div className="text-[12px]">Sent By {message.sender_email}</div>
              <div>{message.content}</div>
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div>
        <button
          className="btn btn-neutral w-32 rounded-lg"
          // onClick={getChatHistory}
        >
          Get Chat History
        </button>
      </div> */}
    </div>
  );
};

export default Chat;
