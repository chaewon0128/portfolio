import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
import Loading from '@/components/loading/Loading';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import LandingPart from '@/components/landing/Landing';
import AboutMe from '@/components/aboutMe/AboutMe';
import Project from '@/components/project/Project';
import Overlay from '@/components/overlay/Overlay';

export default function About() {
    const [isLoading, setIsLoading] = useState(true)

    const onNavigate = (url: string) => {
        window.open(url, '_blank');
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
            console.log("안녕하세요. 함채원 입니다. 확인해주셔서 감사합니다 ❤️‍🔥 ")
            console.log("phone : 010-9551-1541 email: juh7814@gmail.com")
        }, 3000)
        return () => clearTimeout(timer);

    }, []);


    return (
        <Layout>
            {isLoading ? <Loading /> : (
                <>
                    <Navigation />
                    <LandingPart />
                    <Overlay color='blue' />
                    <AboutMe />
                    <Project />
                    <Footer onNavigate={onNavigate} />
                </>
            )}
        </Layout>
    );
}

