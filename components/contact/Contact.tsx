import Image from 'next/image'
import contactMe from '../../public/assets/contact.png'

export default function Contact() {
    return (
        <div className='bg-transparent w-40  h-40 absolute top-[-65px] left-[40%] md:top-[-140px] md:left-[100px]'>
            <Image src={contactMe} layout='fill' alt='프로필 미모티콘' />
        </div>
    )
}
