import { useEffect } from 'react';

const WebSocketComponent = () => {
    useEffect(() => {
        try {
            const socket = new WebSocket("ws://localhost:8000/ws"); // Replace with your FastAPI WebSocket URL
            socket.onopen = () => {
                console.log("WebSocket connected");
                socket.send("Hello FastAPI WebSocket Server!");
            };
            socket.onmessage = (event) => {
                console.log(`Received message: ${event.data}`);
            };
            socket.onclose = () => {
                console.log("WebSocket disconnected");
            };
            return () => {
                socket.close();
            };
        } catch (error) {
            console.error("Error establishing WebSocket connection:", error);
        }
    }, []);

    return <div>WebSocket Connection</div>;
};

export default WebSocketComponent;
