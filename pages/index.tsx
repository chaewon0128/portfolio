import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import Layout from '@/components/layout/Layout';
import TerminalLayout from '@/components/layout/TerminalLayout';
import { useState } from 'react';


export default function Home() {
  const router = useRouter();
  const [isClose, setIsClose] = useState(false);
  const onProject = () => {
    setIsClose(true)
    setTimeout(() =>
      router.push("/about")
      , 1000)
  }
  return (
    <Layout>
      <main className='flex justify-center items-center min-h-screen'>
        <TerminalLayout isClose={isClose} width='xl'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`Hello, I'm <span style="color: #74b9ff">Chae won</span>, a Front-End developer!`)
                .pauseFor(1000)
                .start()
            }}
          />
          <button onClick={onProject} className='bg-red-200 px-5 py-1 mt-10 rounded-lg text-lg font-semibold text-slate-700'>My projects</button>
        </TerminalLayout>
      </main>
    </Layout>
  )
}
