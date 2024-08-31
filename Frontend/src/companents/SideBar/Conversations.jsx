import Conversationown from "./Conversationown";
import useGetConversations from "../../Hooks/useGetConversations.js";
import { getRandomEmoji } from "../../utills/emoji.js";
const Conversations = () => {
  const { loading, conversation } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
      {conversation.map((conversation, idx) => (
        <Conversationown
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;

// import Conversationown from "./Conversationown";

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversationown />
//       <Conversationown />
//       <Conversationown />
//       <Conversationown />
//       <Conversationown />
//     </div>
//   );
// };

// export default Conversations;
