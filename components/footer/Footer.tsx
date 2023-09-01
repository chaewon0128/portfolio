import EmailButton from "../emailButton/EmailButton";

interface IFooter {
    onNavigate: (url: string) => void
}

export default function Footer({ onNavigate }: IFooter) {
    return (
        <footer className='h-[699px] mt-10 relative font-Bebas-neue text-white lg:h-[100px] lg:bg-black lg:flex lg:items-center' id="contact">
            <h2 className='text-5xl items-start pt-[100px] text-center lg:pt-0  lg:text-left lg:pl-20'>Contact Me</h2>
            <ul className='flex flex-col justify-around items-center w-full h-[200px] text-2xl mt-10 lg:flex-row lg:h-0 lg:w-[500px] lg:mt-0' >
                <li>
                    <EmailButton />
                </li>
                <li><button className="hover:text-red-300 hover:transition-all" onClick={() => onNavigate("https://url.kr/ci3tmd")}>resume</button></li>
                <li><button className="hover:text-purple-300 hover:transition-all" onClick={() => onNavigate("https://github.com/chaewon0128")}>github</button></li>
            </ul>
            <p className='absolute  bottom-0 w-full text-center text-xl lg:right-0 lg:w-[300px]'>&copy; copyright 2023 ham chaewon </p>
        </footer>
    )
}
