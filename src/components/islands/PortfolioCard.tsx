import { TECHS } from "@/const/techs"
import type { PortfolioProject } from "@/contents/portfolio"
import { useState, type ReactElement } from "react"
import TechPill from "../TechPill.astro"

type PortfolioProps={
  project: PortfolioProject
  children: ReactElement
}

export function PortfolioCardIsland ({project, children}:PortfolioProps) {
  const [expand, setExpand] = useState(false)

  return (
      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          cursor-pointer
          relative
          flex 
          flex-col 
          p-4
          bg-[rgba(36,36,36,1)]
          rounded-3xl
          h-[314px]
          `}
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}>
          <div 
            className={`
              absolute
              h-full
              flex
              flex-col
              rounded-xl
              justify-start
              items-start
              bg-[rgba(36,36,36,1)]
              overflow-hidden
              transition-all
		          duration-500
		          ease-in-out
              ${expand 
                ? "gap-0 w-[400px]             h-[125%]              translate-x-[-24%] translate-y-[-20%] pb-3 z-50"
                : "gap-2 w-[calc(100%_-_32px)] h-[calc(100%_-_32px)] translate-x-[0%]   translate-y-[0%]   z-0 "
              }
            `}
            style={{
              "--shadow-color": project.color,
              boxShadow: `0px 0px 0px 0px ${project.color}`,
              animation: expand?`pulse-shadow 1.5s infinite`:'',
            }}
            >
            <div
              className={`h-[150px] min-h-[150px] w-full`}
                style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
              }}
            />
            <div className="flex flex-col items-center w-full gap-2">
              <div className={`
                w-full 
                flex 
                flex-row 
                items-center 
                justify-between 
                transition-all
		            duration-500
		            ease-in-out
                ${expand ? "p-4":"p-0"}`}>
                <h3 className="self-start text-xl text-bold text-yellow-200">{project.name}</h3>
                <h3 className="text-sm text-gray-500">{`${project.companyName}`}</h3>
              </div>
            </div>
            <p className={`
              relative
              w-full 
              text-sm 
              text-thin 
              text-pretty 
              truncate
              transition-all
		          duration-500
		          ease-in-out
              ${expand ? "p-4":"p-0"}
              before:absolute
              before:left-0
              before:bottom-[-2px]
              before:bg-gradient-to-t
              before:from-[rgba(36,36,36,1)]
              before:to-[rgba(36,36,36,0)]
              before:h-full
              before:w-full
              ${expand
                ? "before:opacity-0"
                : "before:opacity-100"}
                before:transition-opacity0
                before:duration-500
                before:ease-in-out  
              `}>
              {project.description}
            </p>
        <div className={`
          flex 
          flex-row 
          flex-nowrap
          overflow-hidden 
          whitespace-nowrap
          gap-2 
          transition-all
		      duration-500
		      ease-in-out
          ${expand ? "h-[40px]":"h-[120px]"}
              ${expand ? "pl-4 mt-0":"pl-0 mt-0"}

`}>          {children}
        </div>
      </div>
    </a>
  )
}