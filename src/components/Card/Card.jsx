import styles from './Card.module.css';

// UI
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// image
import atorney from '../../../src/assets/images/attorney.png'

// ElevenLabs & hooks
import {useConversation} from '@11labs/react';  
import { useEffect, useState } from "react";

const VoiceChat = () =>{

  // States
  const [hasPermission, setHasPermission] = useState(false);
  const [user, setUser] = useState({
   name:"Jessica Tony",
   image: "/attorney.png"
  });
  const [muted, setMuted] = useState(false)

  const conversation = useConversation();
  const {status, isSpeaking} = conversation;

  const handleStartConversation = async () =>{
    console.log("Start Call button clicked");
    const conversationId = await conversation.startSession({
      agentId: import.meta.env.VITE_ELEVENLABS_AGENT_ID
    });

    console.log("Agent ID:", import.meta.env.VITE_ELEVENLABS_AGENT_ID);
    
    console.log("started conversation ", conversationId);
    
  };

  const handleEndConversation = async () =>{
    await conversation.endSession();

  };

  const toggleMute = async () =>{
      conversation.setVolume({
        volume: muted ? 1 : 0,
      });
      setMuted(!muted);

  };

  useEffect( () => { 

    const requestMicPermission = async () => {

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setHasPermission(true);

    } catch (error) {
        if (error.name === "NotAllowedError") {
            alert("Please allow microphone use in your browser settings.");
        }
        console.error("Error accessing microphone", error);
    }

    };

    requestMicPermission();

    }, []
  )

  return (
        <Card
          className="shadow border-0"
          style={{ width: "30rem", margin: "50px auto", borderRadius: "20px" }}
        >
          <Card.Img
            className="rounded-circle w-50 m-auto mt-5"
            style={{
              border: "solid 4px white",
              boxShadow: "0px 0px 50px 24px rgba(0, 140, 255, 0.1)",
            }}
            src = {atorney}
            alt ={user.name}
          />
          <Card.Body className="text-center ">
            <Card.Title className="mt-3">{user.name}</Card.Title>

            {status === "connected" ? (
             <div className="d-flex">
               <Button
              // onClick={toggleMute}            
                onClick={handleEndConversation}            
                className="m-4"  
                style={{ width: "256px", borderRadius: "8px", padding: "16px 32px" }}
                variant="danger"
              >
           
                End Call
              </Button>
               <Button
              onClick={toggleMute}                      
                className="m-4 muted"  
                style={{ width: "256px", borderRadius: "8px", padding: "16px 32px"}}
              >
                Mute
              </Button>
             </div>
            ) : (
              <Button     
              onClick={handleStartConversation}            
              className="m-4"
              disabled= {false}
              style={{ width: "256px", borderRadius: "8px", padding: "16px 32px" }}
              variant="primary"
            >
              Start Call
            </Button>
          
            )}
          </Card.Body>
        </Card>
      );
}
export default VoiceChat;

