import Image from "next/image";
import { SiNextdotjs, SiJavascript, SiTypescript, SiCss3, SiHtml5, SiReact } from 'react-icons/si';
import develper from '../../public/assets/developer.webp';
import selfie from '../../public/assets/selfie.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";


export default function AboutMe() {
    const introduceRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);

    const onMoveContact = () => {
        const contact = document.getElementById('contact')!;
        contact.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: introduceRef.current,
                start: 'top 30%',
                end: 'top',
            },
        })
        let ctx = gsap.context(() => {
            tl.fromTo('.title', { opacity: 0, y: 0 }, { opacity: 1, y: -50, duration: 0.5 })
            tl.fromTo('.highlite', { backgroundColor: 'transparent' }, { backgroundColor: '#BEF264', duration: 0.5 })
            tl.fromTo('.highlite', { rotate: 0 }, {
                rotate: -11, ease: "Elastic.easeOut"
            })
            tl.fromTo('.section', { opacity: 0, y: 0 }, { opacity: 1, y: -40, duration: 0.7, stagger: 0.4 })
        }, introduceRef);

        return () => ctx.revert();
    }, [])

    return (
        <div className='relative w-full min-h-screen px-10 2xl:px-[300px] mt-[200px] ' id="about" ref={introduceRef}>
            <h2 className='title text-[3em] xl:text-[9em] font-be-vietnam text-white '><span className='highlite inline-block bg-lime-300 text-black w-36 lg:w-40 xl:w-[450px] text-center'>  WHO </span> <br /> ARE YOU?</h2>
            <button className='section font-be-vietnam text-black bg-lime-300 px-3 py-2 xl:px-6 xl:py-4 xl:text-[20px] rounded-full absolute right-10 2xl:right-[300px] top-15 lg:top-24 hover:bg-slate-400 hover:text-white' onClick={onMoveContact}>Contact Me</button>
            <section className='mt-10 text-white section md:text-right'>
                <h3 className='text-2xl font-be-vietnam md:text-5xl'>about me.</h3>
                <p className='mt-2 text-lg md:text-xl'>안녕하세요 웹 프론트엔드 개발자 함채원 입니다. <br />
                    새로운 기술과 인터랙티브 웹에 대한 열정을 가지고 있습니다 <br />
                    제 목표는 고객중심으로 사고하며 사용자 경험을 최적화하고, <br /> 이를 통해 비즈니스의 성장에 기여하는 개발자가 되는 것입니다.</p>
            </section>
            <section className='section relative w-[500px] md:left-[0] md:bottom-[0px] xl:bottom-[250px]'>
                <div className='relative w-[350px] h-[467px] mt-10 left-20'>
                    <Image src={develper} alt='개발자 사진' fill />
                </div>
                <div className='absolute w-[350px] h-[467px] top-[12%] left-0'>
                    <Image src={selfie} alt='셀카 사진' fill />
                </div>
            </section>
            <section className='section hidden md:block absolute top-[50%] xl:top-[60%] 2xl:right-[300px] right-10 text-white w-[400px] text-right'>
                <h3 className='text-2xl font-be-vietnam md:text-5xl'>my skills.</h3>
                <div className='w-[200px] flex gap-4 mt-10 text-[50px]'>
                    <div className='text-orange-500 skill'><SiHtml5 /> </div>
                    <div className='text-blue-600 skill'><SiCss3 /> </div>
                    <div className='text-yellow-400 skill'><SiJavascript /> </div>
                    <div className='text-blue-400 skill'><SiTypescript /> </div>
                    <div className='text-blue-300 skill'><SiReact /> </div>
                    <div className='skill'><SiNextdotjs /> </div>
                </div>
            </section>
        </div>
    )
}
