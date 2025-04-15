import React, { useEffect, useState } from "react";
import { createConnection } from "./chat";
import { useChatRoom } from "./useChatRoom";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:12345');

    useChatRoom({
      roomId,
      serverUrl
    });



 


  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl}
          onChange={e => {
            setServerUrl(e.target.value)

          } }
        />
        <h1>Welcome to the {roomId} room!</h1>
      </label>
    </>
  );
}

function App() {
  const [roomId, setRoomId] = useState("js");
  const [show, setShow] = useState(false);
  return (
    <div>
      <label>
        Choose chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="js">js</option>
          <option value="css">css</option>
          <option value="nodejs">nodejs</option>
        </select>
      </label>

      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>

      {show && <hr />}

      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}

export default App;
