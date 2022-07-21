
const CardUser = ({onBottomScroll}) => {
    return (
        <div onClick={() => onBottomScroll() } className="flex justify-between mb-5 cursor-pointer">
            <div className="flex items-center">
                <img src="/Avatar.png" alt="" className="lg:mr-4" />
                <div className="hidden lg:block">
                    <p className="font-semibold text-base xl:text-lg text-white">Mark Njungkel</p>
                    <p className="text-gray-200 text-sm xl:text-base">Ok , see you later</p>
                </div>
            </div>
            <p className="text-gray-200 text-sm xl:text-base hidden lg:block">19:48</p>
        </div>
    )
}

export default CardUser