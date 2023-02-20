import phone from '../../../assets/contact/phone.svg';
import mail from '../../../assets/contact/mail.svg';
import Card from './Card';

const Contact = () => {
    return (
        <div className="container py-12 mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div>
                <h2 className="after-effect after:left-48 mt-12 lg:mt-0 mb-12 md:mb-[30px]">Contact</h2>
                <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7">
                    <Card icon={phone} title="Téléphone" text="+33 6 32 66 88 42" href="tel:+332668842" />
                    <Card icon={mail} title="Email" text="raymond.benoit@orange.fr" href="mailto:raymond.benoit@orange.fr" />
                </div>
                <div className='dark:border-[#212425] dark:border-2 md:p-[48px]  p-4   bg-color-810 rounded-xl dark:bg-[#111111]'>
                    <h3 className='text-2xl '>
                        <span className='text-gray-lite dark:text-[#A6A6A6]'>
                            Me contacter :
                        </span>
                    </h3>
                    <form name="contact" id='contact-form' method='post' data-netlify="true" action='/' onSubmit={(e) => e.preventDefault() } >
                        <input type="hidden" name='form-name' value="contact" />
                        <div className='relative z-0 w-full mt-[40px] mb-8 group'>
                            <input name='username' type="text" className='block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer' />
                            <label htmlFor="" className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'>Nom *</label>
                        </div>
                        <div className='relative z-0 w-full mb-8 group'>
                            <input name='email' type="text" className='block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer' />
                            <label htmlFor="" className='class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"'>Email *</label>
                        </div>
                        <div className='relative z-0 w-full mb-8 group'>
                            <input name='message' type="text" className='block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer' />
                            <label htmlFor="" className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'>Message *</label>
                        </div>
                        <div className='transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3'>
                            <input type="submit" value="Envoyer" className=' transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white ' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;