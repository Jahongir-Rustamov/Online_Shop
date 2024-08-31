import { useEffect } from "react";
import { useSocketContext } from "../Context/SoketContext.jsx";
import { useConversation } from "../zustand/useConversations";
import notificationSound from "../assets/sounds/notification.mp3";
export const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { setMessages, messages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
