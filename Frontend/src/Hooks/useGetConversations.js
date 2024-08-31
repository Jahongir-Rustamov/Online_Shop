import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, SetLoading] = useState(false);
  const [conversation, SetConversation] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      SetLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        SetConversation(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        SetLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversation };
};

export default useGetConversations;
