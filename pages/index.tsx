import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {

  const router = useRouter();

  const onProject = () => { router.push("/about") }
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-800 '>
      <motion.div className='bg-[#3B3B3B] w-[700px] h-[400px] shadow-black shadow-2xl' >
        <div className='pl-2 space-x-1 bg-slate-50' >
          <div className='w-3 h-3 inline-block rounded-full bg-red-400' />
          <div className='w-3 h-3 inline-block rounded-full bg-yellow-400' />
          <div className='w-3 h-3 inline-block rounded-full bg-green-400' />
        </div>
        <div className='flex flex-col justify-center items-center text-3xl  text-white h-full'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`Hello, I'm <span style="color: #74b9ff">Chae won</span>, a Front-End developer!`)
                .pauseFor(1000)
                .start()
            }}
          />
          <button onClick={onProject} className='bg-red-200 px-5 py-1 mt-10 rounded-lg text-lg font-semibold text-slate-700'>My projects</button>
        </div>
      </motion.div>
    </div >
  )
}
