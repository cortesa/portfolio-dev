import { TECHS } from '../const/techs'

export type PortfolioProject = {
  name: string
  companyName: string
  image: string
  color: string
  url: string
  description: string
  techs: (keyof typeof TECHS)[]
}

export const PORTFOLIO: PortfolioProject[] = [
  {
    name: 'Yolorekt',
    companyName:"Yolorekt",
    image: '/images/projectCovers/Yolorekt.png',
    color: "#f97316",
    url: 'https://yolorekt.com',
    description:
      'YOLOrekt is building a comprehensive short-term prediction platform for crypto, stocks, and more. YOLO is a social and fun way to bid on the future price of an asset. Provide in-game liquidity to earn game fees and YOLO rewards.',
    techs: ['REACT', 'SOCKET_IO', 'ATOM', ],
  },
]
