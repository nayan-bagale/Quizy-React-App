import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
const PrivateContext = createContext();

export const PrivateContextProvider = ({ children }) => {
  const { id } = useParams();
  const [question, setQuestions] = useState([]);
  const [user, setUser] = useState({});
  const [ans, setAns] = useState({});

  const userCollectionRef = collection(db, "questions");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userCollectionRef);
      setQuestions(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((item) => item.qid === id)
      );
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(ans);
    console.log(question);
  }, [ans]);

  const handleAnswer = (data) => {
    const fun = (ans) => {
      const keys = Object.keys(ans?.ans);
      let Qlen = question[0].data.question.length;
      let count = 0;
      for (let i = 0; i < Qlen; i++) {
        if (
          question[0].data.question[i].key === parseInt(keys[i]) &&
          question[0].data.question[i].data.ans === ans.ans[parseInt(keys[i])]
        ) {
          count++;
        }
      }
      return count;
    };
    setAns({ ...data, score: fun(data) });
  };

  const handleUserData = (data) => {
    setUser(data);
  };

  return (
    <PrivateContext.Provider
      value={{ id, question, user, handleAnswer, handleUserData }}
    >
      {children}
    </PrivateContext.Provider>
  );
};

export const UserData = () => {
  return useContext(PrivateContext);
};
