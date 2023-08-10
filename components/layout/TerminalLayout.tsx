import { useRouter } from "next/router";
import Ball from "../ball/Ball";
import { ReactNode } from "react";
import { motion } from "framer-motion"
interface ITerminal {
    children: ReactNode,
    isClose?: boolean,
    width: string
}

interface SizeType {
    [propName: string]: string;
}

export default function TerminalLayout({ children, isClose = false, width }: ITerminal) {
    const router = useRouter();
    const size: SizeType = {
        xl: 'w-[700px] h-[400px]',
        md: 'w-[700px] h-[400px]',
    }


    return (
        <>
            <motion.div initial={{ scaleX: isClose ? 1 : 0 }} animate={{ scaleX: isClose ? 0 : 1 }} transition={{
                type: "spring",
                restDelta: 0.5
            }} className={`bg-[#3B3B3B] shadow-black shadow-2xl  ${size[width]} `} >
                <div className='pl-2 space-x-1 bg-slate-50' >
                    <Ball color="red" />
                    <Ball color="yellow" />
                    <Ball color="green" />
                </div>
                <div className='flex flex-col justify-center items-center text-3xl  text-white h-full'>
                    {children}
                </div>
            </motion.div>


        </>);
}

