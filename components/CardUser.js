
const CardUser = () => {
    return (
        <div className="flex justify-between mb-5 cursor-pointer">
            <div className="flex items-center">
                <img src="/Avatar.png" alt="" className="mr-4" />
                <div>
                    <p className="font-semibold text-lg text-white">Mark Njungkel</p>
                    <p className="text-gray-200">Ok , see you later</p>
                </div>
            </div>
            <p className="text-gray-200">19:48</p>
        </div>
    )
}

export default CardUser