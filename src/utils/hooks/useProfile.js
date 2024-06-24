import { Users } from "@/lib/placeholder/users";
import { useEffect, useState } from "react";

const initialState = {
  picture: "",
  pangalan: "",
  program: "",
  palayaw: "",
  edad: "",
  kasarian: "",
  birthday: "",
  relihiyon: "",
  caseNo: "",
  goalsAchieved: [],
};

const useProfile = (username) => {
  const [error, setError] = useState({ error: false, errorMessage: "" });
  const [profileData, setProfileData] = useState(initialState);

  useEffect(() => {
    // pseudo get user information (while no server yet)
    const user = Users.find((user) => user.pangalan == username);

    if (!user) {
      setError({ error: true, errorMessage: "User not found!" });
    } else {
      setProfileData({ ...user });
    }

    // API call over here (when the server is getting developed na)
    // This would include loading state since it's asynchronous

    return () => {
      setError({ error: false, errorMessage: "" });
      setProfileData(initialState);
    };
  }, [username]);

  return {
    profileData,
    setProfileData,
    error,
  };
};

export default useProfile;
