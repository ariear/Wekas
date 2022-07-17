import Head from "next/head"
import CardUser from "../components/carduser"

const Home = () => {
  return (
    <>
    <Head>
      <title>Wekas</title>
    </Head>
    <div className="min-h-screen flex justify-center items-center">

      <div className="w-[1500px] min-h-[90vh] bg-[#7C83FD] flex">

        <aside className="w-[400px] min-h-[90vh] px-5 bg-[#533E85]">

          <div className="flex items-center py-3 mb-5">
            <img src="/icon/menu.png" className="mr-5" alt="" />
            <div className="flex items-center bg-[#F5F5F5] py-2 px-3 rounded-full grow">
              <img src="/icon/search.png" className="mr-4" alt="" />
              <input type="text" placeholder="Search" className="bg-transparent focus:outline-none" />
            </div>
          </div>

          <div className=" h-[80vh] overflow-auto scrollbar-hide">
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
          </div>
        </aside>

        <div className="min-h-[90vh] bg-[url('/bgchat.png')] bg-cover bg-center grow">

        </div>

      </div>

    </div>
    </>
  )
}

export default Home