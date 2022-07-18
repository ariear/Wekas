import Link from 'next/link'

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="w-[1500px] h-[90vh] bg-[#7C83FD] flex justify-between">
          <img src="/rider.jpg" className="h-full w-[50%] object-cover object-center" alt="" />
          
          <div className="flex flex-col grow text-white justify-center">
            <div className="w-[450px] mx-auto">
            <p>Welcome</p>
            <h1 className="text-3xl font-semibold mb-7">Register to create account</h1>

            <div className="flex flex-col mb-5">
              <label className="mb-2">Username</label>
              <input type="text" className="p-3 rounded-lg" placeholder="ambatukam" />
            </div>
            <div className="flex flex-col mb-5">
              <label className="mb-2">Email</label>
              <input type="email" className="p-3 rounded-lg" placeholder="example@exam.com" />
            </div>
            <div className="flex flex-col mb-7">
              <label className="mb-2">Password</label>
              <input type="password" className="p-3 rounded-lg" placeholder="************" />
            </div>
            <button className="bg-[#646FD4] w-full py-3 rounded-xl font-medium mb-7">Register now</button>

            <div className="flex justify-center items-center mb-5">
              <span className="border grow"></span>
              <span className="w-max px-4">Or sign up with</span>
              <span className="border grow"></span>
            </div>

            <div className="flex justify-center mb-10">
              <button className="bg-[#2D3748] text-lg font-medium rounded-full p-5"><img src="/icon/google 1.png" alt="" /></button>
              <button className="bg-black text-lg font-medium rounded-full p-5 mx-3"><img src="/icon/github.svg" alt="" /></button>
              <button className="bg-blue-400 text-lg font-medium rounded-full p-5"><img src="/icon/facebook 1.png" alt="" /></button>
            </div>

            <p className="text-center">Already have an account? <Link href="/auth/login"><a className="text-blue-700">Login here</a></Link></p>

            </div>
          </div>
        </div>
    </div>
    )
}

export default Register