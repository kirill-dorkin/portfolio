const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kirill',
  role: 'Front-End Developer',
  description:
    "I'm a frontend developer with 7 years of experience in IT. I studied at Geeks educational center, then completed an internship and worked at MelBet — the second largest betting company in the world. Earlier, I also interned at a Korean company through CRYXXEN. From the very beginning, I've been actively working as a freelancer, handling projects from idea to launch. I'm currently also developing my own products",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://kg.linkedin.com/in/kirill-dorkin-274777280',
    github: 'https://github.com/kirill-dorkin',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Tailwind CSS',
  'Material UI',
  'Git',
  'REST API',
  'GraphQL',
  'Vite',
  'Webpack',
  'Jest',
  'React Testing Library',
  'Cypress',
  'CI/CD',
  'Docker',
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kirilldorkin.ru@gmail.com',
}

export { header, about, projects, skills, contact }