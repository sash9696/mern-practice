import { useEffect } from "react";
import { createConnection } from "./chat";



export function useChatRoom({serverUrl, roomId}){

    // only at top level managment
    //inside react function or custom hooks, function component only

  
    useEffect(() => {

        const connection = createConnection(serverUrl, roomId);
    
        connection.connect();
    
        return () => {
          connection.disconnect();
        }
    
    
      }, [roomId,serverUrl])

}