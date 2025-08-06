import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await dispatch(login(loginData));
      if (response?.payload?.success) {
        toast.success("Login successful");
        setLoginData({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(response?.payload?.message || "Login failed");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Login Error:", error);
    }
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form
          onSubmit={onLogin}
          className="flex flex-col justify-center gap-3 rounded-lg text-white p-4 w-80 shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Login</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              className="bg-transparent px-2 py-1 border"
              onChange={handleUserInput}
              value={loginData.email}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              className="bg-transparent px-2 py-1 border"
              onChange={handleUserInput}
              value={loginData.password}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-yellow-600 hover:bg-yellow-500 py-2 font-semibold text-lg transition-all rounded-sm"
          >
            Login
          </button>

          <Link to="/forget-password">
            <p className="text-center text-accent underline hover:opacity-80">
              Forgot Password?
            </p>
          </Link>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-accent underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
