import Conversations from "./Conversations";
import LogOut from "./LogOut";
import SearchInput from "./SearchInput";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogOut />
    </div>
  );
};

export default SideBar;


// import Conversations from "./Conversations";
// import LogOut from "./LogOut";
// import SearchInput from "./SearchInput";

// const SideBar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3" />
//       <Conversations />
//       <LogOut />
//     </div>
//   );
// };

// export default SideBar;
