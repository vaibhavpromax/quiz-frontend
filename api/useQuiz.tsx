import axios from "axios";
import { useState } from "react";

const useQuiz = () => {
  const [startquizLoading, setStartquizLoading] = useState(true);

  const startQuiz = async (cb: any, data) => {
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/1`,
        data
      );
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      throw new Error(err.messge);
    } finally {
      setStartquizLoading(false);
    }
    };

    return {
        startQuiz, 
        startquizLoading
    }
};

export default useQuiz;
