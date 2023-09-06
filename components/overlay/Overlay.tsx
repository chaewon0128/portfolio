import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function Overlay() {
    const changeRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: changeRef.current,
                start: 'top top',
                end: 'top top',
            },
        })
        let ctx = gsap.context(() => {
            tl.to('.bar', { height: 0, ease: "power4.inOut", stagger: { amount: 0.5 } })
        }, changeRef);

        return () => ctx.revert();
    }, [])
    return (
        <div className='w-full h-[100vh] flex z-50' ref={changeRef} >
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
            <div className='bar w-[10vw] h-[105vh] bg-slate-600'></div>
        </div>
    )
}
