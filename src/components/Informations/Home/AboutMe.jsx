const AboutMe = () => {
    return (
        <div className='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14'>
            <h2 className="flex align-center after-effect after:left-52 after:block after:w-">A propos</h2>
            <div className='mt-[30px]'>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-gray-lite dark:text-neutral-400 leading-7 text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default AboutMe;