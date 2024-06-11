import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import bg from "@/assets/bb-bg-blurred.png";

export default function SignUp() {
  const [accountType, setAccountType] = useState('super-user'); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Community');

  const handleSignUp = (event) => {
    event.preventDefault();
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
          <img src={logo} alt="BridgeBuilder Foundation" className="w-50 h-50 mx-auto text-bb-violet" />
        </div>
        {accountType === 'regular-user' ? (
          <>
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
          </>
        ) : (
          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <Label htmlFor="username" className="block mb-2 text-lg font-bold text-kanit text-bb-violet dark:text-purple-500">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="password" className="block mb-2 text-lg font-bold text-kanit text-bb-violet dark:text-purple-500">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="userType" className="block mb-2 text-lg font-bold text-kanit text-bb-violet dark:text-purple-500">
                Type
              </Label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              >
                <option value="Community" className="block mb-2 text-lg font-bold text-kanit text-bb-violet dark:text-purple-500">Community</option>
                <option value="Home care"className="block mb-2 text-lg font-bold text-kanit text-bb-violet dark:text-purple-500">Home care</option>
              </select>
            </div>
            <div className="mb-6">
              <Button
                className="w-1/2 h-12 px-3 mt-4 bg-bb-violet text-white hover:bg-purple-700 transition duration-300 ease-in-out text-lg mx-auto"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
          </div>
          </form>
        )}
      </div>
    </div>
  );
}
