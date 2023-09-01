import { RefObject } from "react"

interface ILanding {
    mainRef: RefObject<HTMLDivElement>

}

export default function LandingPart({ mainRef }: ILanding) {
    return (
        <main className='relative flex justify-around flex-col text-white' ref={mainRef}>
            <div className='relative font-bodoni-moda flex flex-col min-h-screen justify-center text-[90px] leading-[70px] md:text-[100px] md:leading-[90px] lg:text-[150px] lg:leading-[130px] '>
                <div className='hidden md:block w-full h-screen '>
                    <video src={require('../../public/assets/whale.mp4')} loop={true} autoPlay={true} className="h-[100%] w-full object-fill" />
                </div>
                <div className='absolute md:bottom-[10%] text-center md:text-left md:pl-10 w-full'>
                    <h2 className='title ml-2'><span className='accent-text'>C</span>reative <br /><span className="title">Developer</span></h2>
                    <p className='title text-lg pl-[90px] md:text-xl mt-5 lg:text-2xl lg:mt-[30px]'>no lisk no fun</p>
                </div>
                <div className='w-full h-[150px] absolute bottom-0 text-center md:w-[400px] md:right-[3%] md:bottom-[50%] lg:top-[20%]'>
                    <p className='title font-Bebas-neue text-2xl w-[400px] m-auto  md:text-5xl md:w-[400px] lg:text-6xl '> INTERACTIVE WEB <span className='accent-text'>DEVELOPMENT</span> ACCESSIBILITY <span className='accent-text'>YOUTUBE</span> BASEBALL<span className='accent-text'> WORKOUT</span> HEALTHY LIFE <span className='accent-text'>TRAVEL</span> POSITIVE <span className='accent-text'>WHALE</span></p>
                </div>
            </div>

        </main>
    )
}
