import Head from "next/head"
import { useRef, useState } from "react"
import CardUser from "../components/carduser"
import ProfileChat from "../components/ProfileChat"
import InputMessage from "../components/InputMessage"
import CardMessage from "../components/CardMessage"
import { unAuthpage } from "../middleware/authPage"
import { authentication } from "../firebase/clientApp";
import Cookies from "js-cookie"
import Router from "next/router"
import LoadingPage from "../components/LoadingPage"

export function getServerSideProps(ctx){
  const dataToken =  unAuthpage(ctx)
  
  return {
    props: {
      dataToken
    }
  }
}

const Home = ({dataToken}) => {
  const [isOpenChat , setIsOpenChat] = useState(false)
  const [isOpenMenu , setIsOpenMenu] = useState(false)
  const [isSignOutLoading , setIsSignOutLoading] = useState(false)

  const scrollmessage = useRef(null)
  
  const onBottomScroll = () => {
    setIsOpenChat(true)
    scrollmessage.current?.scrollIntoView()
  }

  const signOutHandle = () => {
    setIsSignOutLoading(true)
    authentication.signOut().then(() => {
      Cookies.remove('token')

      Router.replace('/auth/login')
    })
  }

  if (isSignOutLoading) {
    return (
      <LoadingPage />
    )
  }

  return (
    <>
    <Head>
      <title>Wekas</title>
    </Head>
    <div className="min-h-screen flex justify-center items-center">

      <div className="w-screen lg:w-[98vw] xl:w-[1260px] 2xl:w-[1500px] h-screen lg:h-[90vh] bg-[#7C83FD] flex">

        <aside className={isOpenMenu ? 'w-[250px] lg:w-[300px] xl:w-[340px] 2xl:w-[400px] h-screen lg:h-[90vh] px-5 bg-[#533E85] relative transition-all' : 'w-max lg:w-[300px] xl:w-[340px] 2xl:w-[400px] h-screen lg:h-[90vh] px-5 bg-[#533E85] relative transition-all'}>

          <div className={isOpenMenu ? 'flex lg:items-center items-start lg:flex-row flex-col py-3 lg:mb-0 mb-2' : 'flex items-center lg:flex-row flex-col py-3 lg:mb-0 mb-2'}>
            <img src={isOpenMenu ? 'icon/silang.png' : 'icon/menu.png'} onClick={() => setIsOpenMenu(!isOpenMenu)} className="lg:mr-5 lg:mb-0 mb-5 cursor-pointer z-10" alt="" />
            <div className="flex items-center bg-[#F5F5F5] py-3 lg:py-2 px-3 rounded-full grow">
              <img src="/icon/search.png" className="lg:mr-4" alt="" />
              <input type="text" placeholder="Search" className="bg-transparent focus:outline-none hidden lg:block" />
            </div>
          </div>

          <div className="h-[83vh] lg:h-[80vh] overflow-auto scrollbar-hide">
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
          </div>

          <div className={isOpenMenu ? 'absolute top-0 left-0 w-full h-full bg-[#533E85] transition-all duration-300 overflow-hidden pt-16 px-5 text-white' : 'absolute top-0 left-0 w-0 h-full bg-[#533E85] transition-all overflow-hidden pt-16'}>
              <div className="flex items-center mb-7">
                <img src={dataToken.imgprofile || '/person.png'} className="w-[55px] rounded-full mr-4" alt="" />
                <p className="text-xl font-medium">{dataToken.username}</p>
              </div>

              <p className="p-3 bg-[#7C83FD] rounded-lg font-medium mb-4 cursor-pointer">Theme</p>
              <p className="p-3 bg-[#7C83FD] rounded-lg font-medium cursor-pointer" onClick={() => signOutHandle()} >Sign Out</p>
          </div>

        </aside>

        <div className="lg:h-[90vh] bg-[url('/bgchat.png')] bg-cover bg-center grow">
          {
            isOpenChat ? 
              <div className="h-full flex flex-col justify-between">
                <ProfileChat />
                <div className="grow overflow-auto scrollbar-hide" >
                <div className="flex flex-col justify-end">
                  <CardMessage isClient={true} title="Halo banh bilek" />
                  <CardMessage isClient={false} title="Halo juga orang" />
                  <CardMessage isClient={true} title="Halo banh bilek" />
                  <CardMessage isClient={false} title="Halo juga orang" />
                  <CardMessage isClient={true} title="Halo banh bilek" />
                  <CardMessage isClient={false} title="Halo juga orang" />
                  <CardMessage isClient={true} title="Halo banh bilek" />
                  <CardMessage isClient={false} title="Halo juga orang" />
                  <CardMessage isClient={true} title="Halo banh bilek" />
                  <CardMessage isClient={false} title="Halo juga orang" />
                  <CardMessage isClient={true} title="Halo banh bilek" />
                  <CardMessage isClient={false} title="Halo juga orangdadas" />
                  <div ref={scrollmessage} ></div>
                </div>
                </div>
                <InputMessage />
              </div>
                  :
              <div className="h-full flex flex-col justify-center items-center text-white text-center">
                <p className="font-bold text-4xl xl:text-5xl mb-4">Welcome Back {dataToken.username}👋</p>
                <p className="font-medium text-lg lg:text-xl">let`s chat with wekas app</p>
              </div>
          }
        </div>

      </div>

    </div>
    </>
  )
}

export default Home