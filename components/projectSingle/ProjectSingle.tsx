import Image from "next/image"

type ProjectSingleType = { project: IProject }
type SteckType = string[]

interface IProject {
    id: number,
    name: string,
    github: string,
    image: string,
    introduction: string,
    url: string,
    steck: SteckType
}


export default function ProjectSingle({ project }: ProjectSingleType) {
    const imageUrl = `/assets${project.image}`;
    const onVisitSite = (url: string) => {
        window.open(url, '_blank');
    }
    return (
        <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center bg-black bg-opacity-70 ">

            <div className="w-[80%] bg-white h-[80%] rounded-2xl p-16 flex flex-col space-y-5">
                <Image
                    src={imageUrl}
                    alt={`${project.name}의 이미지`}
                    width={500}
                    height={300}
                />

                <h3 className="font-extrabold text-5xl text-center">{project.name}</h3>
                <div className="bg-red-200 ">
                    {project.steck?.map((item, i) => <span className="border border-black  text-black rounded-md p-2 mr-2" key={i}>{item}</span>)}
                </div>
                <p className="py-5">{project.introduction}</p>
                <div className="text-right">
                    <button className="border border-black rounded-md w-[100px] p-2 mr-2 uppercase font-semibold  hover:text-blue-300 hover:transition-all transition-all" onClick={() => onVisitSite(project.url)}>
                        visit
                    </button>
                    <button className="border border-black  rounded-md w-[100px] p-2 bg-black text-white uppercase font-semibold  hover:text-blue-300 hover:transition-all transition-all" onClick={() => onVisitSite(project.github)}>
                        github
                    </button>
                </div>
            </div>




        </div >
    )
}
