import { Users } from "@/lib/placeholder/users";
import { useEffect, useState } from "react";
import axios from '../../axiosInstance.js'; 

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // pseudo get user information (while no server yet)
    //const user = Users.find((user) => user.pangalan == username);

    const fetchUser = async () => {
      try {
        const res = await axios.get(`/api/profile/${username}`)
        const user = res.data[0];

        if (!user) {
          setError({ error: true, errorMessage: "User not found!" });
        } else {
          setProfileData({ ...user });
        }
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser(); 

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
