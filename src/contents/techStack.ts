import type { TECHS } from '../const/techs'

type TechStackItem = {
  name: keyof typeof TECHS
  score: number
}

export const TECH_STACK: TechStackItem[] = [
  { name: 'REACT', score: 5 },
  { name: 'TYPESCRIPT', score: 5 },
  { name: 'ATOM', score: 4 },
  { name: 'CSS', score: 5 },
  { name: 'HTML', score: 4 },
  { name: 'NODE', score: 3 },
  { name: 'EXPRESS', score: 3 },
  { name: 'GIT', score: 5 },
  { name: 'GITHUB', score: 5 },
  { name: 'BLOCKCHAIN', score: 4 },
  { name: 'ASTRO', score: 2 },
  { name: 'TAILWIND', score: 3 },
  // ─── Auto-evaluated from experience ────────────────────────────────
  // { name: 'STYLED_COMPONENTS', score: 5 },
  // { name: 'AXIOS', score: 5 },
  // { name: 'SOCKET_IO', score: 4 },
  // { name: 'REACT_QUERY', score: 3 },
  // { name: 'JEST', score: 3 },
  // { name: 'VITEST', score: 2 },
  // { name: 'REACT_TESTING_LIBRARY', score: 2 },
  // { name: 'CYPRESS', score: 2 },
  // { name: 'WAGMI', score: 2 },
  // { name: 'VIEM', score: 2 },
  // { name: 'JENKINS', score: 2 },
  // { name: 'TERRAFORM', score: 2 }
]