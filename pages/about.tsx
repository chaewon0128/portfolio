import Layout from '@/components/layout/Layout';
import SmallTerminal from '@/components/smallTerminal/SmallTerminal';
import webCafe from '../assets/webcafe.png'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useContext, useEffect, useRef, useState } from 'react';
import Scroll from '@/components/scroll/ScrollToRight';
import Loading from '@/components/loading/Loading';
import Navigation from '@/components/navigation/Navigation';
import AboutMe from '@/components/aboutme/AboutMe';
import ScrollToRight from '@/components/scroll/ScrollToRight';
import ScrollToLeft from '@/components/scroll/ScrollToLeft';
import { PageContext } from '@/store/page';

export default function About() {
    const [isLoading, setIsLoading] = useState(true)
    const { scrollYProgress } = useScroll();
    const pageData = useContext(PageContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
            console.log("안녕하세요. 함채원 입니다. 확인해주셔서 감사합니다 ❤️‍🔥 ")
            console.log("phone : 010-9551-1541 email: juh7814@gmail.com")
        }, 3000)
        return () => clearTimeout(timer);

    }, []);



    return (
        <>
            {isLoading ? <Loading /> : (
                <>
                    <Navigation />
                    <AboutMe />
                    <motion.div
                        initial={{ opacity: 1, y: 100 }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            backgroundColor: "black",
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }}
                        className='min-h-screen w-full'>
                        <div className='text-transparent'>.</div>
                        <ScrollToRight src={webCafe} alt="web cafe" url="https://chaewon0128.github.io/html5" introduction='웹표준을 준수하여 제작한 웹사이트 입니다' />
                        <div className='text-transparent'>.</div>
                    </motion.div>
                    <motion.div className='bg-black min-h-screen w-full'>
                        <div>dd</div>
                        <ScrollToLeft src={webCafe} alt="web cafe" url="https://chaewon0128.github.io/html5" introduction='웹표준을 준수하여 제작한 웹사이트 입니다' />
                        <div>dd</div>
                    </motion.div>

                </>
            )}

        </>
    );
}

