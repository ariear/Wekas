const ProfileChat = () => {
    return (
            <div className="flex justify-between items-center bg-[#533E85] py-3 px-4 mb-5">
                <div className="flex items-center">
                    <img src="/Avatar1.png" alt="" className="mr-4" />
                    <div className="text-white">
                        <p className="font-medium text-lg">David Moore</p>
                        <p className="text-sm text-gray-300">last seen 5 mints ago</p>
                    </div>
                </div>
                <img src="/icon/search-purple.svg" className="mr-5" alt="" />
            </div>
    )
}

export default ProfileChat