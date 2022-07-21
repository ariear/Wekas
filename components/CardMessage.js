const CardMessage = ({title, isClient}) => {
    return (
        <div className={isClient ? 'flex justify-end w-[90%] lg:w-[80%] mx-auto mb-3' : 'flex w-[90%] lg:w-[80%] mx-auto mb-3'} >
            <div className={isClient ? 'bg-[#78E378] max-w-[45%] p-3 rounded-xl' : 'bg-white max-w-[45%] p-3 rounded-xl'}>
                <p className="mb-1">{title}</p>
                <p className={isClient ? 'text-white text-sm text-end' : 'text-sm text-end'}>18.16</p>
            </div>
        </div>
    )
}

export default CardMessage