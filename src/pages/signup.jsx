import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import bg from "@/assets/bb-bg.png";

export default function SignUp() {
  return (
    <div className="relative flex justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <img
        src={bg}
        alt="BridgeBuilder bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative w-full max-w-xl p-8 m-auto bg-pink-100 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <img src={logo} alt="BridgeBuilder Foundation" className="w-50 h-50 mx-auto text-bb-violet" />
        </div>
        <div className="mb-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold text-center">
            Please contact your designated <span className="text-bb-violet">super user</span> to get an account.
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 font-bold">
            Already have an account? <a href="/" className="text-purple-600 hover:text-bb-violet">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
