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
import ReactQueryIcon from '../icons/ReactQuery.astro'
import ZustandIcon from '../icons/Zustand.astro'
import Lit from '../icons/Lit.astro'
import SocketIo from '../icons/SocketIo.astro'

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
  JOTAI: {
    name: 'Jotai',
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
  },
  SOCKET_IO: {
    name: 'Socket.IO',
    color: '#FFFFFF',
    icon: SocketIo
  },
  REACT_QUERY: {
    name: 'React Query',
    color: '#FF4154',
    icon: ReactQueryIcon,
  },
  ZUSTAND: {
    name: 'Zustand',
    color: '#B5651D',
    icon: ZustandIcon,
  },

  // ─── Auto-evaluated from experience ────────────────────────────────
  // STYLED_COMPONENTS: {
  //   name: 'Styled Components',
  //   color: '#DB7093',
  //   icon: CssIcon,
  // },
  // AXIOS: {
  //   name: 'Axios',
  //   color: '#5A29E4',
  //   icon: CssIcon,
  // },
  // SOCKET_IO: {
  //   name: 'Socket.io',
  //   color: '#010101',
  //   icon: NodeIcon,
  // },
  // JEST: {
  //   name: 'Jest',
  //   color: '#C63D14',
  //   icon: HtmlIcon,
  // },
  // VITEST: {
  //   name: 'Vitest',
  //   color: '#6E9F18',
  //   icon: TypescriptIcon,
  // },
  // REACT_TESTING_LIBRARY: {
  //   name: 'React Testing Library',
  //   color: '#E83225',
  //   icon: ReactIcon,
  // },
  // CYPRESS: {
  //   name: 'Cypress',
  //   color: '#2E495E',
  //   icon: HtmlIcon,
  // },
  // WAGMI: {
  //   name: 'Wagmi',
  //   color: '#FFC107',
  //   icon: ChainIcon,
  // },
  // VIEM: {
  //   name: 'Viem',
  //   color: '#845EF7',
  //   icon: ChainIcon,
  // },
  // JENKINS: {
  //   name: 'Jenkins',
  //   color: '#D24939',
  //   icon: HtmlIcon,
  // },
  // TERRAFORM: {
  //   name: 'Terraform',
  //   color: '#623CE4',
  //   icon: HtmlIcon,
  // }
}
