import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../../Hooks/useSendMessages";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, SendMessage } = useSendMessages();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await SendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full relative">
//         <input
//           type="text"
//           className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//           placeholder="Send a message ..."
//         />
//         <button className="absolute inset-y-0 end-0 flex items-center pe-3">
//           <BsSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
