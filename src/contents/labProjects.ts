import { TECHS } from "../const/techs"

export type Project = {
  name: string
  image: string
  url: string
  description: string
  techs: (keyof typeof TECHS)[]
}

export const LAB_PROJECTS: Project[] = [
  {
    name: "Movie Explorer",
    image: "/images/projectCovers/MovieExplorer.png",
    url: "https://movie-explorer.lab.cortesa.net",
    description:
    "Browse films by selectable categories, view details, zoom poster images, and manage a simple, non-persistent wishlist. No account or persistence—your selections reset on refresh.",
    techs: [ "VITE", "REACT", "SSR", "SCSS" ],
  },
  {
    name: "Weather",
    image: "/images/projectCovers/Weather.webp",
    url: "https://weather.lab.cortesa.net",
    description:
    "Weather is a web application that fetches real-time weather data using the wttr.in API. Users can search for a city to view current conditions and upcoming forecasts in a clean and intuitive interface.",
    techs: [ "REACT", "TAILWIND", "JOTAI" ],
  },
  {
    name: "Kanban",
    image: "/images/projectCovers/Kanban.webp",
    url: "https://kanban.lab.cortesa.net",
    description:
      "Kanban is an online tool for managing projects and tasks using the Kanban method (not production ready). Developed by cortesa.net, it offers an intuitive interface and advanced features to improve productivity and organization.",
    techs: [ "REACT", "DNDKIT", "TAILWIND" ],
  }
]

