import { TECHS } from '../const/techs'

export type PortfolioProject = {
  name: string
  companyName: string
  image: string
  color: string
  url: string
  description: string
  techs: (keyof typeof TECHS)[]
  status?: 'in-progress' | 'completed' | 'archived'
}

export const PORTFOLIO: PortfolioProject[] = [
  {
    name: 'Yolorekt',
    companyName:"Yolorekt",
    image: '/images/projectCovers/Yolorekt.png',
    color: "#f97316",
    url: 'https://yolorekt.com',
    description:
      'I have developed YOLOrekt’s real-time prediction platform UI with React, TypeScript, Jotai, and Socket.io, ensuring responsive and tested interfaces. Deployed via AWS Amplify in collaboration with designers and cross-functional teams.',
    techs: ['REACT', 'SOCKET_IO', 'JOTAI'],
  },
  {
    name: "Corn",
    companyName: "Number Group",
    image: "/images/projectCovers/corn_v1.png",
    color: "#955A81",
    url: "https://usecorn.com/",
    description: "At NumberGroup I built and maintained modern, responsive UIs using React, TypeScript and Styled‑Components, managing state and data with Zustand and React Query. I implemented Web3 features via Wagmi and Viem, collaborated through Git and Jira.",
    techs: ["REACT", "REACT_QUERY", "ZUSTAND"]
  },
  {
    name: 'Cor UI Kit',
    companyName:"Cortesa",
    image: '/images/projectCovers/cor-ui-kit.png',
    color: "#356B7B",
    url: 'https://github.com/cortesa/cor-ui-kit',
    description:
      'This component library delivers a suite of modern, reusable UI elements built with React and TypeScript. It streamlines front‑end development by providing accessible components that integrate seamlessly into any project.',
    techs: ['REACT'],
    status: 'in-progress',
  },
]