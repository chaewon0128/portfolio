import { HeartIcon } from "@/assets/icons";
import { motion, MotionConfig } from "framer-motion";


export default function Navigation() {
    return (


        <nav className="bg-transparent fixed top-0 w-full text-white pt-2">
            <div className="flex justify-between items-center h-10 px-5">
                <div className="flex items-center w-32 justify-between">
                    <div className="w-4">
                        <HeartIcon />
                    </div>
                    <h1 className="font-press-start flex justify-center items-center text-xs">CHAE WON</h1>
                </div>
                <ul>
                    <li className="font-thin">contact</li>
                </ul>
            </div>
        </nav>

    );
}

