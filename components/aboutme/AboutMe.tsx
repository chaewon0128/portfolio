import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function AboutMe() {
    const boxRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let tl = gsap.timeline()

        tl.to(boxRef.current, {
            rotation: 360,
            x: "100%",
            xPercent: -100,
            duration: 1.5,
            repeat: 1,
            yoyo: true,
        });

    }, []);

    return (
        <>
            <div className='bg-violet-300 w-full min-h-screen'>
                <div className='flex w-full justify-center items-center min-h-screen'>
                    <div className="text-white w-[600px] text-5xl md:text-[80px] text-center font-extrabold">
                        <h2 ref={boxRef}>more creative<br />more develop</h2>
                    </div>
                </div>
                <div className='w-full absolute bottom-0 bg-yellow-200  text-center font-semibold text-green-400 text-lg'>scroll</div>
            </div>
        </>

    );
}

