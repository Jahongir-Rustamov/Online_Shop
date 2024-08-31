import MessageContainer from "../../companents/Messages/MessageContainer";
import SideBar from "../../companents/SideBar/SideBar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[580px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
