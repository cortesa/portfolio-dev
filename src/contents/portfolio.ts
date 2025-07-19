import { TECHS } from '../const/techs'

export type PortfolioProject = {
  name: string
  companyName: string
  image: string
  url: string
  description: string
  techs: (keyof typeof TECHS)[]
}

export const PORTFOLIO: PortfolioProject[] = [
  {
    name: 'Yolorekt',
    companyName:"Yolorekt",
    image: '/images/labKanbanPreview.webp',
    url: 'https://kanban.lab.cortesa.net',
    description:
    'Kanban is an online tool for managing projects and tasks using the Kanban method (not production ready). Developed by cortesa.net, it offers an intuitive interface and advanced features to improve productivity and organization.Kanban is an online tool for managing projects and tasks using the Kanban method (not production ready).',
    techs: ['REACT', 'DNDKIT', 'TAILWIND', 'LIT_ELEMENTS', 'ATOM'],
  },
]
