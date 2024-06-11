import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import bg from "@/assets/bb-bg-blurred.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/overview");
  };

  return (
    <div className="relative flex justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <img
        src={bg}
        alt="BridgeBuilder bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative w-full max-w-xl p-8 m-auto bg-pink-100 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <img
            src={logo}
            alt="BridgeBuilder logo"
            className="w-50 h-50 mx-auto text-bb-violet"
          />
        </div>
        <div className="mb-6">
          <Label
            className="block mb-2 text-lg font-bold text-kanit text-bb-violet dark:text-purple-500"
            htmlFor="username"
          >
            Username
          </Label>
          <Input
            className="w-full px-4 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="mb-6">
          <Label
            className="block mb-2 text-lg font-bold text-kanit text-bb-violet dark:text-purple-500"
            htmlFor="password"
          >
            Password
          </Label>
          <Input
            className="w-full px-4 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="mb-6">
          <Button
            className="w-1/2 h-12 px-3 mt-4 bg-bb-violet text-white hover:bg-purple-700 transition duration-300 ease-in-out text-lg mx-auto"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 font-bold">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-purple-600 hover:text-bb-violet">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}