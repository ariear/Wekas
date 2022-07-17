const InputMessage = () => {
    return (
        <div className="bg-[#533E85] flex justify-between items-center py-4 px-5 w-[80%] mx-auto rounded-xl mb-5">
            <div className="flex items-center grow">
                <img src="/icon/emoji.png" className="mr-4" alt="" />
                <input type="text" placeholder="Message" className="bg-transparent grow focus:outline-none text-white" />
            </div>
            <img src="/icon/send.svg" alt="" />
        </div>
    )
}

export default InputMessage