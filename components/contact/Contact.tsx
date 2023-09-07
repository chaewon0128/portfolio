import Image from 'next/image'
import contactMe from '../../public/assets/contact.png'

export default function Contact() {
    return (
        <div className='bg-transparent w-96  h-96  absolute bottom-16 left-[10%] md:w-40 md:h-40 md:top-[-140px] md:left-[100px]'>
            <Image src={contactMe} layout='fill' alt='프로필 미모티콘' />
        </div>
    )
}
