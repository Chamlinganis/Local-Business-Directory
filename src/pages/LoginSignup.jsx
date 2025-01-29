import { useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../layout/FullLayout/components/Navbar";
import { Button } from "../components/ui/button";

export default function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    navigate(isLogin ? "/signup" : "/login", { replace: true });
  };

  return (
    <main className="flex-grow flex items-center justify-center bg-gray-100 py-12">
      <div className="w-full max-w-md px-8 py-6 bg-white shadow-lg rounded-lg m-4">
        <h2 className="text-center text-2xl font-bold text-gray-700">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form method="post" className="space-y-6 mt-4">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  ref={nameRef}
                  id="name"
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  ref={confirmPasswordRef}
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Button onClick={() => navigate('/forgot-password')} variant={"link"}>
                  Forgot your password?
                </Button>
              </div>
            </div>
          )}

          <Button variant={"outline"} className="w-full" type="submit">
            {isLogin ? "Log in" : "Sign up"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Button variant={"link"} onClick={toggleForm}>
            {isLogin ? "Sign up" : "Log in"}
          </Button>
        </div>
      </div>
    </main>
  );
}
