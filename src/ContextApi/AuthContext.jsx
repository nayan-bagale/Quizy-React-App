import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db, messaging } from "../firebase/firebase";
import { redirect } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getToken } from "firebase/messaging";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [quesAttemted, setQuesAttempted] = useState([]);
  const [question, setQuestions] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    redirect("/");
  };

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (current) => {
        setUser(current);
      },
      [user]
    );
  }, []);

  const attemptedCollectionRef = collection(db, "attempted");
  const userCollectionRef = collection(db, "questions");

  const getData = useCallback(async (setFunction, collectionRef) => {
    const data = await getDocs(collectionRef);
    const allData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((doc) => doc.uid === user?.uid);

    console.log("Data is fetched !!!");

    setFunction(allData);
  });

  const notification = async (qid, token, isNotified) => {
    const data = await getDocs(collection(db, "notify"));
    const allData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((doc) => doc.uid === user?.uid && doc.qid === qid);

    if (allData.length === 0) {
      await addDoc(collection(db, "notify"), {
        uid: user.uid,
        qid,
        deviceToken: [token],
        isNotified,
      });
      console.log("first");
      return;
    }

    const obj = {
      uid: user.uid,
      qid,
      deviceToken: [...allData[0]?.deviceToken],
      isNotified,
    };

    if (allData[0].deviceToken.includes(token)) {
      obj.deviceToken = allData[0].deviceToken;
    } else {
      obj.deviceToken = [...allData[0].deviceToken, token];
    }

    await updateDoc(doc(db, "notify", allData[0].id), obj);

    console.log("done");
  };

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BNPBwXShn97YkyX0ihyU-NbaHoqfyrrQOIpiyO-KVeIcYc_VEIs4UhFl43ignjO3goTfxg_FJWC5B46SrZ6LtUQ",
      });
      console.log("Notification permission granted.");
      return token;
    } else {
      alert("Notification permission denied.");
      return false;
    }
  };

  useEffect(() => {
    getData(setQuesAttempted, attemptedCollectionRef);
    getData(setQuestions, userCollectionRef);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        quesAttemted,
        question,
        requestPermission,
        notification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
