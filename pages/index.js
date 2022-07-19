import Head from "next/head"
import { useRef, useState } from "react"
import CardUser from "../components/carduser"
import ProfileChat from "../components/ProfileChat"
import InputMessage from "../components/InputMessage"
import CardMessage from "../components/CardMessage"
import { unAuthpage } from "../middleware/authPage"

export function getServerSideProps(ctx){
  unAuthpage(ctx)

  return {
    props: {}
  }
}

const Home = () => {
  const [isOpenChat , setIsOpenChat] = useState(false)

  const scrollmessage = useRef({})

  const onBottomScroll = async () => {
    setIsOpenChat(true)
    scrollmessage.current.scrollTop = await scrollmessage.current.scrollHeight
  }

  return (
    <>
    <Head>
      <title>Wekas</title>
    </Head>
    <div className="min-h-screen flex justify-center items-center">

      <div className="w-[1500px] h-[90vh] bg-[#7C83FD] flex">

        <aside className="w-[400px] h-[90vh] px-5 bg-[#533E85]">

          <div className="flex items-center py-3 mb-5">
            <img src="/icon/menu.png" className="mr-5" alt="" />
            <div className="flex items-center bg-[#F5F5F5] py-2 px-3 rounded-full grow">
              <img src="/icon/search.png" className="mr-4" alt="" />
              <input type="text" placeholder="Search" className="bg-transparent focus:outline-none" />
            </div>
          </div>

          <div className=" h-[80vh] overflow-auto scrollbar-hide">
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
            <CardUser setIsOpenChat={setIsOpenChat} onBottomScroll={onBottomScroll} />
          </div>
        </aside>

        <div className="h-[90vh] bg-[url('/bgchat.png')] bg-cover bg-center grow">
          {
            isOpenChat && 
              <div className="h-full flex flex-col justify-between">
                <ProfileChat />
                <div className="grow overflow-auto scrollbar-hide" ref={scrollmessage} >
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
                </div>
                </div>
                <InputMessage />
              </div>
          }
        </div>

      </div>

    </div>
    </>
  )
}

export default Home