import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import Loading from "../components/Loader";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader] = useState(true)
     const name = "arman mia";
     
     const createNewUser = (email,password) => {
     return    createUserWithEmailAndPassword(auth, email, password)
         
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    
    const signOutUser = () => {
      return  signOut(auth)
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currectUser => {
            console.log(currectUser);
            setUser(currectUser);
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    },[])
      if (loader) {
        return <Loading />;
      }
  const authInfo = {
    name,
    createNewUser,
    user,
    setUser,
    signOutUser,
    signInUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
