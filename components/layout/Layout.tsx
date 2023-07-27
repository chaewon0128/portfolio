import { ReactNode } from 'react';
import Ball from '../ball/Ball';
import { useRouter } from 'next/router';
import cls from '@/lib/cls';

export default function Layout(props: { children: ReactNode }) {
    const router = useRouter();
    return (
        <div className='flex justify-center items-center min-h-screen w-full bg-slate-800 '>

            {props.children}

        </div>

    );
}

