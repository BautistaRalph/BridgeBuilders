import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png";

export default function SignUp() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Background component will go here */}
      <div className="w-full max-w-xl p-8 m-auto bg-pink-100 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <img src={logo} alt="BridgeBuilder Foundation" className="w-50 h-50 mx-auto text-purple-600" />
        </div>
        <div className="mb-6">
          <Label className="block mb-2 text-lg font-bold text-kanit text-purple-600 dark:text-purple-500" htmlFor="username">
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
          <Label className="block mb-2 text-lg font-bold text-kanit text-purple-600 dark:text-purple-500" htmlFor="password">
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
          <Button className="w-1/2 h-12 px-3 mt-4 bg-purple-600 text-white hover:bg-purple-700 transition duration-300 ease-in-out text-lg mx-auto">Sign Up</Button>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 font-bold">
            Already have an account? <a href="/" className="text-purple-600 hover:text-purple-500">Login</a>
          </p>
        </div>
      </div>
    </div>
  )
}
