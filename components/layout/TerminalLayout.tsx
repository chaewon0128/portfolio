import cls from "@/lib/cls";
import { useRouter } from "next/router";
import Ball from "../ball/Ball";
import { ReactNode } from "react";
import { motion } from "framer-motion"


export default function TerminalLayout(props: { children: ReactNode, isClose: boolean }) {
    const router = useRouter();

    return (
        <>
            <motion.div initial={{ scaleX: props.isClose ? 1 : 0 }} animate={{ scaleX: props.isClose ? 0 : 1 }} transition={{
                type: "spring",
                restDelta: 0.5
            }} className={cls('bg-[#3B3B3B] shadow-black shadow-2xl', router.pathname === "/" ? "w-[700px] h-[400px]" : "w-[1000px] h-[700px]")} >
                <div className='pl-2 space-x-1 bg-slate-50' >
                    <Ball color="red" />
                    <Ball color="yellow" />
                    <Ball color="green" />
                </div>
                <div className='flex flex-col justify-center items-center text-3xl  text-white h-full'>
                    {props.children}
                </div>
            </motion.div>


        </>);
}

