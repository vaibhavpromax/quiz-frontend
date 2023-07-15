import axios from "axios";
import { useState } from "react";

const useUser = () => {
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  const loginApiCall = async (cb: any, data) => {
    setLoginLoading(true);
    try {
      const res = await axios.post (
        `https://jsonplaceholder.typicode.com/posts/1`, data
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err.messge);
    } finally {
      setLoginLoading(false);
    }
  };

  const signupApiCall = async (cb: any ,data) => {
    setSignupLoading(true);
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/1`,data
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err.messge);
    } finally {
      setSignupLoading(false);
    }
  };

  return {
    loginLoading,
    signupLoading,
    loginApiCall,
    signupApiCall,
  };
};

export default useUser;
