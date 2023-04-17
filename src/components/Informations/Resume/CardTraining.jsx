const CardTraining = (props) => {
    return (
        <div className='py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 '>
            
            <span className='flex justify-between text-tiny text-gray-lite dark:text-[#b7b7b7]'>
                {props.year}{props.children}
            </span>
            <h3 className='inline-flex items-center text-xl dark:text-white'>
                {props.formation}
            </h3>
            <p className='dark:text-[#b7b7b7]'>
                {props.place}
            </p>
            <p className='dark:text-[#b7b7b7]'>
                {props.description}
            </p>
        </div>
    );
};

export default CardTraining;