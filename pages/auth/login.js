import React, { useState } from "react";
import { authentication } from "../../firebase/clientApp";
import { signInWithPopup, GoogleAuthProvider , GithubAuthProvider } from "firebase/auth";
import Link from "next/link";
import Layout from "../../components/Layout";
import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";
import { authpage } from "../../middleware/authPage";
  
export function getServerSideProps(ctx){
  authpage(ctx)

  return {
    props: {}
  }
}

const Login = () => {
  const [field , setFields] = useState({
    email: '',
    password: ''
  })

  const onTraditionalLogin = async (e) => {
    e.preventDefault();
    
    const signin = await axios.post('/api/auth/login' , field)
    if (signin.status === 200) {
      Cookies.set('token', signin.data.token)

      Router.replace('/')
    }
  }

  const signWithFirebase = (providername) => {
    let provider
    if (providername === 'google') {
      provider = new GoogleAuthProvider();
    }else if (providername === 'github') {
      provider = new GithubAuthProvider();
    }

    signInWithPopup(authentication, provider).then(res => {
      if (!res._tokenResponse.isNewUser) {
        axios.post('/api/auth/firebase/login', {
          imgprofile: res._tokenResponse.photoUrl,
          username: res._tokenResponse.displayName,
          email: res._tokenResponse.email
        }).then(res => {
          if (res.status === 200) {
            Cookies.set('token' , res.data.token)

            Router.replace('/')
          }
        })
      }

    }).catch(err => console.log(err) )
  }

    return (
      <Layout title="Login" >
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-[1500px] h-[90vh] bg-[#7C83FD] flex justify-between">
              <img src="/rider.jpg" className="h-full w-[50%] object-cover object-center" alt="" />
              
              <div className="flex flex-col grow text-white justify-center">
                <div className="w-[450px] mx-auto">
                <p>Welcome</p>
                <h1 className="text-3xl font-semibold mb-7">Login to your account</h1>

              <form onSubmit={(e) => onTraditionalLogin(e)} >
                <div className="flex flex-col mb-5">
                  <label className="mb-2">Email</label>
                  <input type="email" value={field.email} onChange={(e) => setFields({...field , email: e.target.value})} className="p-3 rounded-lg text-black" placeholder="example@exam.com" required />
                </div>
                <div className="flex flex-col mb-7">
                  <label className="mb-2">Password</label>
                  <input type="password" value={field.password} onChange={(e) => setFields({...field , password: e.target.value})} className="p-3 rounded-lg text-black" placeholder="************" required />
                </div>
                <button className="bg-[#646FD4] w-full py-3 rounded-xl font-medium mb-7">Login now</button>
              </form>

                <div className="flex justify-center items-center mb-5">
                  <span className="border grow"></span>
                  <span className="w-max px-4">Or sign in with</span>
                  <span className="border grow"></span>
                </div>

                <div className="flex justify-center mb-10">
                  <button onClick={() => signWithFirebase('google')} className="bg-[#2D3748] text-lg font-medium rounded-full p-5 mr-3"><img src="/icon/google 1.png" alt="" /></button>
                  <button onClick={() => signWithFirebase('github')} className="bg-black text-lg font-medium rounded-full p-5"><img src="/icon/github.svg" alt="" /></button>
                </div>

                <p className="text-center">Dont have an account? <Link href="/auth/register"><a className="text-blue-700">Join free</a></Link></p>

                </div>
              </div>
            </div>
        </div>
      </Layout>
    )
}

export default Login