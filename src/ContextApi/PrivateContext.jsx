import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import notify from "../API/notify";

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

  // useEffect(() => {
  //   console.log(ans);
  //   console.log(question);
  // }, [ans, question]);

  const getNotify = async () => {
    const data = await getDocs(collection(db, "notify"));
    const token = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter(
        (item) => item.uid === question[0].uid && item.qid === question[0].qid
      );
    return {
      deviceToken: token[0].deviceToken,
      isNotified: token[0].isNotified,
    };
  };

  const handleAnswer = async (data) => {
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
    setAns({
      ...data,
      score: fun(data),
      qid: question[0].qid,
      uid: question[0].uid,
      qtitle: question[0].data.title,
    });
    notifyDevices(fun(data), data.name);

    try {
      const docRef = await addDoc(collection(db, "attempted"), {
        ...data,
        score: fun(data),
        qid: question[0].qid,
        uid: question[0].uid,
        qtitle: question[0].data.title,
        qdes: question[0].data.description || "",
      });
      console.log(docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  async function notifyDevices(score, name) {
    if (score === undefined || name === undefined) return;

    const { isNotified, deviceToken } = await getNotify();
    if (isNotified) {
      const data = {
        title: question[0].data.title,
        body: `${name} Got ${score} out of ${question[0].data.question.length} `,
      };
      notify(deviceToken, data);
    }
  }

  const handleUserData = (data) => {
    setUser(data);
  };

  return (
    <PrivateContext.Provider
      value={{
        id,
        question,
        user,
        ans,
        getNotify,
        handleAnswer,
        handleUserData,
        notifyDevices,
      }}
    >
      {children}
    </PrivateContext.Provider>
  );
};

export const UserData = () => {
  return useContext(PrivateContext);
};
