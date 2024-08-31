import { useAuthContext } from "../../Context/AuthContext";
import { useConversation } from "../../zustand/useConversations";
import { extractTime } from "../../utills/extractTime";
const OwnMessage = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const ChatClassName = fromMe ? "chat-end" : "chat-start";
  const ProfilePic = fromMe
    ? authUser.ProfilePic
    : selectedConversation?.ProfilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shouldShake = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${ChatClassName}`}>
      <div className="chat-image avatar">
        <div className="rounded-full w-10">
          <img src={ProfilePic} alt="avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white  ${bubbleBgColor} ${shouldShake}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default OwnMessage;

// const OwnMessage = () => {
//     return (
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//           <div className="rounded-full w-10">
//             <img
//               src={
//                 "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//               }
//               alt="avatar"
//             />
//           </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>
//           Hi! What is upp?
//         </div>
//         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//           12:42
//         </div>
//       </div>
//     );
//   };

//   export default OwnMessage;
