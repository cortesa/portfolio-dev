import { TECHS } from "@/const/techs"
import type { PortfolioProject } from "@/contents/portfolio"
import { useState, type ReactElement, Children } from "react"

import style from "./portfolioCard.module.css"
import clsx from "clsx"

type PortfolioProps={
  project: PortfolioProject
  children: ReactElement
}

export function PortfolioCardIsland ({project, children}:PortfolioProps) {
  const [expand, setExpand] = useState(false)
  const hasManyTechs = project.techs.length > 2;

  return (
      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={style.container}
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}>
          <div 
            className={clsx(
              style.content,
              expand && style.expanded
            )}
            style={{
              "--shadow-color": project.color,
            }}
            >
              <div className={style.imageContainer}>
                {project.status==="in-progress" && <div className={style.imageOverlay} style={{backgroundColor: project.color}} >IN PROGRESS</div>}
                <div
                  className={`h-[150px] min-h-[150px] w-full`}
                    style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                  }}
                />
              </div>
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
        {expand && hasManyTechs ? (
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
            ${expand ? "h-[50px]":"h-[120px]"}
            ${expand ? "pl-4 mt-0":"pl-0 mt-0"}`}>
              <div className={style.scrollContainerº}>
                <div className={`${style.scrollMarquee} gap-2`}>
                  {children}
                  {children}
                </div>
              </div>
          </div>
        ) : (
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
            ${expand ? "pl-4 mt-0":"pl-0 mt-0"}`}>
            {children}
          </div>
        )}
      </div>
    </a>
  )
}