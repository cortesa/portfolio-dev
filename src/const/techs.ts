import type { AstroComponentFactory } from 'astro/runtime/server/index.js'
import ReactIcon from '../icons/React.astro'
import TypescriptIcon from '../icons/Typescript.astro'
import AtomJotaiIcon from '../icons/AtomJotai.astro'
import CssIcon from '../icons/Css.astro'
import HtmlIcon from '../icons/Html.astro'
import NodeIcon from '../icons/Node.astro'
import ExpressIcon from '../icons/Express.astro'
import GitIcon from '../icons/Git.astro'
import GithubIcon from '../icons/Github.astro'
import ChainIcon from '../icons/Chain.astro'
import TailwindcssIcon from '../icons/Tailwindcss.astro'
import AstroIcon from '../icons/Astro.astro'
import NextIcon from '../icons/Next.astro'
import DndKitIcon from '../icons/DndKit.astro'
import Lit from '../icons/Lit.astro'

export type Tech = {
  name: string
  color: string
  icon: AstroComponentFactory
}

export const TECHS = {
  REACT: {
    name: 'React',
    color: '#61DAFB',
    icon: ReactIcon,
  },
  TYPESCRIPT: {
    name: 'Typescript',
    color: '#3178C6',
    icon: TypescriptIcon,
  },
  ATOM: {
    name: 'Atom',
    color: '#66595C',
    icon: AtomJotaiIcon,
  },
  CSS: {
    name: 'CSS',
    color: '#639',
    icon: CssIcon,
  },
  HTML: {
    name: 'HTML',
    color: '#e34f26',
    icon: HtmlIcon,
  },
  NODE: {
    name: 'Node.js',
    color: '#41873F',
    icon: NodeIcon,
  },
  EXPRESS: {
    name: 'Express',
    color: '#FFFFFFcc',
    icon: ExpressIcon,
  },
  GIT: {
    name: 'Git',
    color: '#DE4C36',
    icon: GitIcon,
  },
  GITHUB: {
    name: 'GitHub',
    color: '#FFFFFFcc',
    icon: GithubIcon,
  },
  BLOCKCHAIN: {
    name: 'Blockchain',
    color: '#6b7280',
    icon: ChainIcon,
  },
  TAILWIND: {
    name: 'Tailwind',
    color: '#18B7B9',
    icon: TailwindcssIcon,
  },
  ASTRO: {
    name: 'Astro',
    color: '#FF5D01',
    icon: AstroIcon,
  },
  NEXT: {
    name: 'Next.js',
    color: '#FFFFFFcc',
    icon: NextIcon,
  },
  DNDKIT: {
    name: 'Dnd kit',
    color: '#FFFFFFcc',
    icon: DndKitIcon,
  },
  LIT_ELEMENTS: {
    name: 'Lit Element',
    color: '#3455FF',
    icon: Lit
  }
}
