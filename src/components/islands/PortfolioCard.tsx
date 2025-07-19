import { TECHS } from "@/const/techs"
import type { PortfolioProject } from "@/contents/portfolio"
import { useState } from "react"
import TechPill from "../TechPill.astro"

type PortfolioProps={
  project: PortfolioProject
}

export function PortfolioCardIsland ({project}:PortfolioProps) {
  const [expand, setExpand] = useState(false)

  return (
      <div 
        className={`
          relative
          flex 
          flex-col 
          p-4
          bg-[rgba(36,36,36,1)]
          rounded-3xl
          h-80
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
                ? "gap-0 w-[400px]            h-[400px] translate-x-[-24%] translate-y-[-10%] z-50"
                : "gap-2 w-[calc(100%_-_32px)] h-[290px] translate-x-[0%]   translate-y-[0%]   z-0 "
              }
            `}>
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
                before:transition-opacity
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
          pt-2
          pb-3
          h-content 
          transition-all
		      duration-500
		      ease-in-out
          ${expand ? "p-4":"p-0"}
          ${expand ? "scale-100":"scale-75 translate-x-[-12%]"}
          
          `}>
          {project.techs.map((tech: (keyof typeof TECHS)) => (
            <div
              className="flex items-center gap-1 px-2 py-2 rounded-full text-[12px] font-medium"
              style={{ border: `1px solid ${TECHS[tech].color}` }}
              key={tech}
            >
              <span style={{ color: TECHS[tech].color}}>{TECHS[tech].name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}