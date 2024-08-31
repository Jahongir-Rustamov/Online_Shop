import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useConversation } from "../../zustand/useConversations";
import useGetConversations from "../../Hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, Setsearch] = useState("");
  const { setSelectedConversation } = useConversation();

  const { conversation } = useGetConversations();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversations = conversation.find((c) =>
      c.Fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversations) {
      setSelectedConversation(conversations);
      Setsearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => Setsearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;

// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search…"
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };
// export default SearchInput;
