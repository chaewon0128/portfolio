import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SmallTerminal from '../smallTerminal/SmallTerminal';
import { StaticImageData } from 'next/image';

type SmallTerminalType = { url: string, src: StaticImageData, alt: string, introduction: string }
export default function ScrollToRight({ src, alt, url, introduction }: SmallTerminalType) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });
    const bottomShadowValue = useTransform(scrollYProgress, [0, 1], ['-100%', '12%']);
    const imageValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
    const topShadowValue = useTransform(scrollYProgress, [0, 1], ['-25%', '100%']);


    return (

        <section className="bg-black min-h-screen flex justify-between max-w-[1200px] my-[100vh] mx-auto overflow-hidden" ref={containerRef}>
            <div className="flex items-center flex-col justify-center w-[40%] text-[24px] ml-[5%] text-left">
                <div className='text-white text-[70px] mt-0'>
                    <div>
                        HTML5, CSS, JS
                    </div>
                    <button>github</button>
                </div>
            </div>
            <div className="w-[50%] flex items-center relative">
                <motion.div className="img-inner" style={{ translateX: imageValue }}>
                    <motion.div className=" h-[100%] w-[100%] absolute left-0 z-0"
                        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)", translateX: bottomShadowValue }} />
                    <SmallTerminal src={src} alt={alt} introduction={introduction} url={url} />
                    <motion.div className=" h-[100%] w-[100%] absolute top-0 z-20"
                        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%)", translateX: topShadowValue }} />
                </motion.div>
            </div>
        </section >

    )
}