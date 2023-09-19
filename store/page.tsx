import { ReactNode, createContext } from "react";

export const ProjectContext = createContext([{}])

type projectDataType = { children: ReactNode }

export function ProjectDataContext({ children }: projectDataType) {

    const ProjectData = [
        {
            id: 1,
            name: "Web Cafe",
            steck: ["HTML5", "CSS"],
            image: "/webcafePage.png",
            url: "https://chaewon0128.github.io/html5",
            github: "https://github.com/chaewon0128/html5",
            introduction: '웹 접근성과 HTML5 시멘틱 마크업 사용을 준수하여 제작한 웹 사이트 입니다.'
        },
        {
            id: 2,
            name: "Nomad World",
            steck: ["HTML5", "CSS", "JavaScript"],
            image: "/nomadWorldPage.png",
            url: "https://chaewon0128.github.io/nomad-world",
            github: "https://github.com/chaewon0128/nomad-world",
            introduction: '바닐라 자바스크립트로 싸이월드를 클론한 웹 페이지입니다. 일촌평을 입력하면 해당 내용을 로컬 스토리지에 저장하여 유지합니다. 날씨 API와 Geolocation API 활용하여 사용자의 위치 기반으로 실시간 날씨 정보를 제공합니다.'
        },
        {
            id: 3,
            name: "karly",
            steck: ["HTML5", "CSS", "JavaScript"],
            image: "/karlyPage.png",
            url: "https://marketkarly-team.github.io/marketkarly-client/client/page/home.html",
            github: "https://github.com/marketkarly-team/marketkarly-client",
            introduction: '마켓 컬리 웹사이트를 바닐라자바스크립트로 클론 코딩한 팀 프로젝트입니다.  효율적인 협업과 코드 품질 향상을 위하여 코드리뷰와 ESLint를 활용한 코드 일관성 유지하였습니다.'
        },
        {
            id: 4,
            name: "Movie App",
            steck: ["React", "TypeScript", "React-query", "Framer-motion", "styled-components"],
            image: "/movieAppPage.png",
            url: "https://dolfin-movie.netlify.app/",
            github: "https://github.com/chaewon0128/nomad-movie-app",
            introduction: '리액트로 제작한 영화 정보 웹페이지 입니다. 영화 데이터베이스 API를 활용하여 실시간 영화 정보 확인이 가능합니다. '
        },
        {
            id: 5,
            name: "Pomodoro",
            steck: ["React", "Recoil", "Framer-motion", "styled-components",],
            image: "/pomodoroPage.png",
            url: "https://dolfin-pomodoro-timer.netlify.app/",
            github: "https://github.com/chaewon0128/nomad-pomodoro-timer",
            introduction: '리액트로 제작한 뽀모도로 타이머 입니다. '
        },
        {
            id: 6,
            name: "Tweety",
            steck: ["Next.js", "TypeScript", "tailwindCSS", "Prisma", "SWR"],
            image: "/tweety2.png",
            url: "https://tweety-gz44cvyx8-chaewon0128.vercel.app/",
            github: "https://github.com/chaewon0128/tweety",
            introduction: 'next.js로 제작한 Serverless SNS 서비스 입니다. 회원가입, 로그인, 로그아웃이 가능하고 게시물 작성, 삭제, 좋아요 기능과 코멘트 작성 기능을 구현 하였습니다.'
        },
    ]

    return (
        <ProjectContext.Provider value={ProjectData}>
            {children}
        </ProjectContext.Provider>
    );
}


