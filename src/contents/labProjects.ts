import { TECHS } from '../const/techs'

export type Project = {
  name: string
  image: string
  url: string
  description: string
  techs: (keyof typeof TECHS)[]
}

export const LAB_PROJECTS: Project[] = [
  {
    name: 'Kanban',
    image: '/images/projectCovers/Kanban.webp',
    url: 'https://kanban.lab.cortesa.net',
    description:
      'Kanban is an online tool for managing projects and tasks using the Kanban method (not production ready). Developed by cortesa.net, it offers an intuitive interface and advanced features to improve productivity and organization.',
    techs: ['REACT', 'DNDKIT', 'TAILWIND'],
  },
  {
    name: 'Weather',
    image: '/images/projectCovers/Weather.webp',
    url: 'https://weather.lab.cortesa.net',
    description:
      'Weather is a web application that fetches real-time weather data using the wttr.in API. Users can search for a city to view current conditions and upcoming forecasts in a clean and intuitive interface.',
    techs: ['REACT', 'TAILWIND', 'ATOM'],
  },
]
