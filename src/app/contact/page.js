import { ContactPage } from '@/components/ContactForm'
import Bghero from '@/assets/hero.jpeg'

export const metadata = {
    title: "Contact"
}

export default function Contact() {
    return (
        <div>
            <div
                className='relative h-80 bg-black text-white flex justify-center items-center w-full bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${Bghero.src || Bghero})` }}
            >
                <div className='absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-50'></div>
                <h1 className='text-5xl font-bold relative text-orange-500'>Contact Us</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between p-4 md:p-16 container md:text-lg">
                <ContactPage />
            </div>

            <div className='h-[2px] w-4/5 bg-gray-500 mx-auto my-5 rounded-full'></div>
        </div>
    )
}