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
  contact: 'https://t.me/sfgech',
  social: {
    linkedin: 'https://kg.linkedin.com/in/kirill-dorkin-274777280',
    github: 'https://github.com/kirill-dorkin',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Motel',
    description:
      'Motel — full-stack MERN web app for booking and hosting hotels, inspired by Airbnb, with map integration, user dashboards, and seamless reservation management',
    stack: [
      'React',
      'Redux',
      'Tailwind CSS',
      'TanStack Query',
      'Node.js',
      'Express',
      'JWT',
      'MongoDB'
    ],
    sourceCode: 'https://github.com/kirill-dorkin/motel-frontend',
    livePreview: 'https://motel-frontend-seven.vercel.app',
  },
  {
    name: 'Vivid Creation',
    description:
      'Vivid Creation is a modern AI-powered platform for creating and selling presentations. It supports content generation, slide customization, and template monetization',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Prisma', 'Clerk', 'Bun'],
    livePreview: 'https://vivid-creation-five.vercel.app',
  },
  {
    name: 'ChatBot AI',
    description:
      'ChatBot AI is an AI-powered support bot that responds to user inquiries in real time. Easily integrates with external APIs and adapts to any business domain',
    stack: ['JavaScript', 'React', 'CSS', 'Groq API'],
    sourceCode: 'https://github.com/kirill-dorkin/ai-chatbot',
    livePreview: 'https://chatbot-ai-beta-six.vercel.app',
  },
]

const skills = [
  // Ядро
  'JavaScript (ES6+)',
  'TypeScript',
  'React 18/19',
  'Next.js (App Router)',
  'Node.js',

  // Стилизация
  'Tailwind CSS',
  'CSS Modules',
  'PostCSS',
  'SASS/SCSS',

  // UI/UX & библиотеки
  'Radix UI',
  'shadcn/ui',
  'Material UI',
  'Framer Motion',

  // State Management
  'Zustand',
  'Redux Toolkit',
  'React Query',

  // Backend & ORM
  'Prisma ORM',
  'REST API',
  'GraphQL',
  'tRPC',

  // Auth & DevOps
  'Clerk',
  'Auth.js',
  'Docker',
  'CI/CD (GitHub Actions)',

  // Инструменты
  'Git',
  'Bun',
  'Vite',
  'Webpack',

  // Тесты
  'Jest',
  'React Testing Library',
  'Cypress',

  // Базы данных
  'PostgreSQL',
  'MongoDB',

  // Прочее
  'OpenAI API',
  'Stripe / LemonSqueezy',
  'Figma to Code',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kirilldorkin.ru@gmail.com',
}

export { header, about, projects, skills, contact }