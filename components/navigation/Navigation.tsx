import { HeartIcon } from "@/icons/icons";

export default function Navigation() {
    return (
        <nav className="bg-transparent fixed top-0 w-full text-white pt-2 z-40">
            <div className="flex justify-between items-center h-10 px-5">
                <div className="flex items-center w-[180px] ">
                    <div className="w-4 animate-bounce mr-3">
                        <HeartIcon />
                    </div>
                    <h1 className="font-press-start flex justify-center items-center text-xs md:text-lg">CHAE WON</h1>
                </div>
                <ul className="flex justify-between w-60 md:text-lg">
                    <li className="font-thin"><a href="#about">about</a></li>
                    <li className="font-thin"><a href="#work">work</a></li>
                    <li className="font-thin"><a href="#contact">contact</a></li>
                </ul>
            </div>
        </nav>

    );
}

