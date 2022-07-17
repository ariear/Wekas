import React from "react";
import { authentication } from "../../firebase/clientApp";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  
const Login = () => {

  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then(res => {
      console.log(res);
    }).catch(err => console.log(err) )
  }

    return (
        <div>
            <p>Ayo login pake Github Account</p>
            <button onClick={() => signWithGoogle()} >Klik Me</button>
        </div>
    )
}

export default Login