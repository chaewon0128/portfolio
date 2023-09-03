import Image from "next/image";
import { useEffect, useRef } from "react";
import profile from '../../public/assets/hello.png';
import { SiVelog, SiGithub, SiInstagram, SiNotion } from 'react-icons/si';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
interface IAboutMe {
    onNavigate: (url: string) => void
}


export default function AboutMe({ onNavigate }: IAboutMe) {
    const introduceRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: introduceRef.current, // 트리거로 사용할 요소 선택
                start: 'top -10%', // 시작 위치 설정
                end: '+=500', // 종료 위치 설정
                markers: true,
                scrub: true, // 스크롤 속도에 따라 애니메이션을 조절합니다.
            },
        })
        let ctx = gsap.context(() => {
            tl.from(".intro", { opacity: 0, x: -100, duration: 1, ease: 'bounce.out' })
            tl.from(".duce", { opacity: 0, x: 100, duration: 1, ease: 'bounce.out' })
            tl.from(".background", { opacity: 0, duration: 1.5 })
            tl.from(".introduce", { opacity: 0, y: 100, duration: 1.2 })

        }, introduceRef);

        return () => ctx.revert();
    }, [])

    return (
        <div id='about' className='font-Hahmlet text-white text-2xl  min-h-screen py-[500px] relative' ref={introduceRef} >
            <div className='min-h-screen flex flex-col items-center justify-center space-y-20 text-[140px] font-Bebas-neue' >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_i) => (
                    <div key={_i} className='md:hidden'>
                        <span className='intro inline-block'>Intro</span>
                        <span className='duce inline-block'>duce</span>
                    </div>
                ))}
                <div className='hidden md:block'>
                    <span className='intro inline-block   text-[200px] lg:text-[300px]'>Intro</span>
                    <span className='duce inline-block  text-[200px] lg:text-[300px]'>duce</span>
                </div>
            </div>
            <div className='background absolute top-0 bg-black w-full h-full opacity-70 ' />
            <div className='introduce z-100 absolute top-[40%] flex flex-col items-center justify-center m-auto w-full'>

                <p className='w-full  text-center ' >새로운 도전과 인터렉티브한 웹을 좋아합니다<br />
                    <br />다양한 경험을 토대로 <br /> 저만의 아이디어를 실현할 수 있습니다.</p>
                <Image src={profile} width={300} alt='프로필 미모티콘' />
                <div className='flex gap-7 text-white mt-10'>
                    <button className='hover:opacity-30 hover:transition-opacity' onClick={() => onNavigate('https://github.com/chaewon0128')}><SiGithub size={30} /></button>
                    <button className='hover:opacity-30 hover:transition-opacity' onClick={() => onNavigate('https://url.kr/ci3tmd')}><SiNotion size={30} /></button>
                    <button className='hover:opacity-30 hover:transition-opacity' onClick={() => onNavigate('https://velog.io/@dolfin')}><SiVelog size={30} /></button>
                    <button className='hover:opacity-30 hover:transition-opacity' onClick={() => onNavigate('https://www.instagram.com/nweahc/')}><SiInstagram size={30} /></button>
                </div>
            </div>
        </div>
    )
}
