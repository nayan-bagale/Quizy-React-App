import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { UserAuth } from "../ContextApi/AuthContext";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


const Dashboard = () => {
  const { user } = UserAuth();
  const [accounts, setAccounts] = useState([]);

  const userObj = {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };

  const userCollectionRef = collection(db, "user");

  

  useEffect(() => {

    const createUser = async () => {
      const bool = accounts.filter((user) => user.email === userObj.email);
      if (bool.length > 0) {
        alert("already have account");
        return;
      }
      await addDoc(userCollectionRef, { ...userObj });
    };


    const getData = async() => {
      const data = await getDocs(userCollectionRef);
      setAccounts(data.docs.map((doc) => ({...doc.data(), id: doc.id,})));
      console.log(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }
    getData();
  },[])

  return (
    <main className=" flex flex-col items-center justify-center text-white text-3xl">
      <div className=" flex gap-2 text-xl">
        {/* <button className=" bg-slate-400 p-2" onClick={createUser}>
          Submit
        </button> */}
      </div>
      <div>
        {accounts.map((user, i) => (
          <div key={i}>
            {user.displayName} {user.email} <br /> {user.uid}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
