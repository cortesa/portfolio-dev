type ExperienceItem = {
	date: string
	title: string
	description: string
	bullets?: string[]
	link?: string
}

export const EXPERIENCE = [
  {
    date: 'Feb 2025 - Jul 2025',
    title: 'Senior Frontend Developer & web3 at NumberGroup',
    description: 'As a Frontend Developer at NumberGroup, I´ve been collaborating to add new features and port to v2.',
		bullets: [
			'Developed and maintained UI using React.js (v18), TypeScript (v5.3.2), and Styled-Components (v6.1.1).',
			'Implemented state management using Zustand (v4.5.2).',
			'Handled asynchronous data with React Query (v4.3.0) and Axios (v1.7.3).',
			'Integrated web3 functionality using Wagmi (v2.14.16) and Viem (v2.25.0).',
			'Managed version control and collaboration using Git GitHub and Jira.',
			'Worked closely with cross-functional teams to deliver high-quality software.',
			'Maintained code quality and followed industry best practices.'
		]
  },
  {
    date: 'May 2021 - Dec 2024',
    title: 'Senior Frontend Developer at YoloRekt',
    description: 'As a Frontend Developer at YoloReck, I over see the complete development workflow-from implementing Ul designs to deploying applications using AWS Amplify.',
		bullets: [
			'Led the development of UI using React.js (v18), TypeScript v(5.3) and CSS module.',
			'Managed application state with Jotai/Atom (v2.x).',
			'Ensured real-time data updates using Socket.io (v4.7).',
			'Using Jest (28.x), Vitest (v2.x), React Testing Library (v14.0.0) and Cypress (v12).',
			'Managed version control and collaboration using Git GitHub, Trello, Slack-canvas.',
			'Oversaw the deployment process using AWS Amplify.',
			'Collaborated with designers to implement UI/UX designs.',
		]
  },
  {
    date: 'Nov 2019 - Nov 2021',
    title: 'Senior Frontend Developer at SpankChain',
    description: 'I was part of a frontend development team, handling tasks such as component modifications, implementing new business logic, and fixing bugs, all within an agile environment.',
		bullets: [
      'Developed and maintained UI using React.js (v16.13), TypeScript (v3.8) and Styled-components (v5.2.1).',
      'Implemented state management with React Context.',
			'handled asynchronous data using Axios (v0.21).',
      'Participated in the design and implementation of new features and business logic.',
      'Worked within an agile team, contributing to sprint planning and retrospectives.',
      'Optimized frontend performance and ensured cross-browser compatibility.'
		]
  },
  {
    date: 'Mar 2018 - Nov 2019',
    title: 'Senior Fullstack web developer at Syscoin (Blockchain Foundry)',
    description: 'I was part of the founding development team, where I built the landing page, contributed to an Angular-based marketplace, designed the wallet interface, and automated blockchain node deployment.',
		bullets: [
			'Developed and maintained the landing page using React.js (v16.8) and CSS.',
			'Assisted in the development of a marketplace using Angular (v7.x).',
			'Designed and implemented the wallet UI with React.js.',
			'Automated blockchain node deployment using Jenkins and Terraform.',
			'Collaborated with cross-functional teams to deliver high-quality software.',
			'Ensured code quality through code reviews and testing.',
			'Actively participated in agile workflows including sprint planning, reviews, and retrospectives.'
		]
  },
  {
    date: 'Jul 2017 - Feb 2018',
    title: 'Senior Frontend developer at Thrifa',
    description: 'I lead the development team responsible for building web applications centered on blockchain technology and cryptocurrencies. Our tech stack includes React.js and Angular for the Ul, with CSS and Styled-components for',
		bullets: [
			'Led the development of web applications using React.js (v15.6) and Angular (v5.x).',
			'Implemented UI designs using CSS and Styled-components (v2.x).',
			'Managed state with Redux (v3.7.x) and Context.',
			'Handled asynchronous data with Axios (v0.18).',
			'Collaborated with backend developers to integrate APIs.',
		]
  }

]