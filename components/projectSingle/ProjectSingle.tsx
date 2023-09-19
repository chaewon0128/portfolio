import Image from "next/image"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type ProjectSingleType = { project: IProject }
type ItemsType = string[]

interface IProject {
    id: number,
    name: string,
    github: string,
    image: string,
    introduction: string,
    url: string,
    steck: ItemsType
}


export default function ProjectSingle({ project }: ProjectSingleType) {
    const showRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);
    const imageUrl = `/assets${project.image}`;
    const onVisitSite = (url: string) => {
        window.open(url, '_blank');
    }
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: showRef.current,
                start: 'top 30%',
                end: 'top',
                markers: true,
            },
        })
        let ctx = gsap.context(() => {
            tl.fromTo('.section', { opacity: 0, y: 0 }, { opacity: 1, y: -40, duration: 0.7, stagger: 0.4 })
        }, showRef);

        return () => ctx.revert();
    }, [])

    return (
        <div className="scroll-section h-[100vh] w-[100vw] flex flex-col justify-center items-center relative text-yellow-50  pt-28 lg:px-[200px] " ref={showRef}>
            <div className="section relative w-[500px] h-96 bottom-[150px] lg:w-[700px] lg:h-[500px] ">
                <Image src={imageUrl} alt={`${project.name}의 이미지`} fill />
            </div>
            <section className=" section w-[80%] h-[250px] xl:h-[330px] md:flex md:justify-center md:gap-10 lg:gap-10 xl:gap-[100px]">
                <h3 className="inline mb-3 text-4xl font-be-vietnam md:text-7xl lg:text-8xl">{project.name}</h3>
                <div className="mt-5 md:mt-0">
                    <p className="text-xl leading-[30px] md:text-2xl w-[450px] md:w-[450px] md:leading-10 xl:leading-[50px]  xl:text-3xl lg:w-[600px]">{project.introduction}</p>
                    <div className="z-10 pt-5">
                        {project.steck?.map((item, i) => <div className={`inline-block bg-yellow-50 text-sm text-black font-bold p-2 mr-2 mb-2 ${i >= 2 ? 'top-28' : ''}`} key={i}>{item}</div>)}
                    </div>
                    <div className="mt-9 md:mt-2">
                        <button className="mr-2 transition-all border-b-4 border-lime-300 text-lime-300 font-be-vietnam hover:text-black hover:bg-lime-300 md:text-xl lg:text-3xl" onClick={() => onVisitSite(project.url)}>visit</button>
                        <button className="transition-all border-b-4 border-lime-300 text-lime-300 font-be-vietnam lg:text-3xl hover:text-black hover:bg-lime-300 md:text-xl" onClick={() => onVisitSite(project.github)}>github</button>
                    </div>
                </div>
            </section>

        </div >
    )
}
