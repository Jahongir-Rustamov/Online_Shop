import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setlloading] = useState(false);
  const login = async ({ username, password }) => {
    setlloading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      console.log("Login:", data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Successfully logged");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setlloading(false);
    }
  };
  return { login, loading };
};

export default useLogin;
