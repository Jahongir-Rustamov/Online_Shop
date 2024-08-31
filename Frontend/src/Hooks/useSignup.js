import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    Fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    // Formani tekshirish va xatolarni ko'rsatish
    const success = handleError({
      Fullname,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);

    try {
      // Backendga signup so'rovini yuborish
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Successfully SignUp");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

// Formadagi xatolarni tekshiruvchi funksiya
function handleError({
  Fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!Fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields ⚠️");
    return false;
  }
  if (Fullname.length < 3) {
    toast.error("Fullname must be at least 3 characters long ⚠️");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords don't match ⚠️");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters ⚠️");
    return false;
  }

  return true;
}
