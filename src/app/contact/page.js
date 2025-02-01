import { ContactPage } from '@/components/ContactForm'

export const metadata = {
    title: "Contact"
}

export default function Contact() {
    return (
        <div>
            {/* <div className="w-full sm:h-[30vh] h-[20vh] grid place-items-center overflow-hidden bg-center bg-cover" style={{ backgroundImage: `url(${ShowAllHeaderImage.src})` }}>
                <div className='text-center'>
                    <h2 className="lg:text-7xl md:text-6xl text-4xl uppercase font-crimson  text-white">Contact Us</h2>
                    <span className='tracking-wider uppercase text-white md:text-xl text-sm mt-5'>Connect with us</span>
                </div>
            </div> */}

            <div className="flex flex-col md:flex-row justify-between p-4 md:p-16 container md:text-lg">
                <ContactPage />
            </div>

            <div className='h-[2px] w-4/5 bg-gray-500 mx-auto my-5 rounded-full'></div>
            
            
            
        </div>
    )
}