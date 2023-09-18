import Image from "next/image"

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
    const imageUrl = `/assets${project.image}`;
    const onVisitSite = (url: string) => {
        window.open(url, '_blank');
    }
    return (
        <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center ">
            <div className="w-[400px] md:w-[800px] lg:w-[1000px] bg-white h-[80%] rounded-2xl p-14 flex flex-col space-y-2 relative">
                <div className="min-w-[280px] h-[280px] mx-auto lg:mx-0 lg:mt-12 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[300px] relative ">
                    <Image
                        src={imageUrl}
                        alt={`${project.name}의 이미지`}
                        fill
                    />
                </div>
                <h3 className="font-extrabold text-5xl text-center pt-2 lg:text-left md:text-[4em] lg:text-[5em] lg:absolute lg:left-15 lg:bottom-40">{project.name}</h3>
                <div className="lg:absolute lg:bottom-[100px] z-10 pt-2">
                    {project.steck?.map((item, i) => <div className={`inline-block border border-black text-black text-xs rounded-xl p-2 mr-2 mb-2 ${i >= 2 ? 'top-28' : ''}`} key={i}>{item}</div>)}
                </div>
                <div className="w-[300px] md:w-[700px] md:h-[280px] md:pt-[20px] lg:absolute lg:right-16 lg:top-[200px] lg:h-[500px] lg:pt-0 lg:w-[440px] lg:leading-10">
                    <div className="w-full text-md md:text-xl lg:text-xl font-nanum">{project.introduction}</div>
                    <div className="absolute bottom-10 right-20">
                        <button className="border border-black rounded-md w-[100px] p-2 mr-2 uppercase font-semibold  hover:text-blue-400 hover:border-blue-400 hover:transition-all transition-all" onClick={() => onVisitSite(project.url)}>
                            visit
                        </button>
                        <button className="border border-black  rounded-md w-[100px] p-2 bg-black text-white uppercase font-semibold  hover:text-blue-400 hover:transition-all transition-all" onClick={() => onVisitSite(project.github)}>
                            github
                        </button>
                    </div>
                </div>


            </div>

        </div >
    )
}
