import { useEffect, useRef } from "react";
import useGetMessage from "../../Hooks/useGetMessages";
import MessageSkeleton from "../skelaton/MessageSkelaton";
import OwnMessage from "./OwnMessage";
import { useListenMessages } from "../../Hooks/useListenMessages";

const Message = () => {
  const { messages, loading } = useGetMessage();
  useListenMessages();
  const LastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      LastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={LastMessageRef}>
            <OwnMessage message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Message;

// import OwnMessage from "./OwnMessage"

// const Message = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <OwnMessage/>
//         <OwnMessage/>
//         <OwnMessage/>
//         <OwnMessage/>
//         <OwnMessage/>
//         <OwnMessage/>
//         <OwnMessage/>
//         <OwnMessage/>

//     </div>
//   )
// }

// export default Message
