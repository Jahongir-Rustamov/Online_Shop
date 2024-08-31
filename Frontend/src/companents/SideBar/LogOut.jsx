import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";
const LogOut = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-red-600 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogOut;
