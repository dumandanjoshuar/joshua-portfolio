export default defineAppConfig({
  global: {
    name: 'Joshua Dumandan',
    email: 'your-email@example.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin',
    github: 'https://github.com/your-github',
    resumeUrl: '/resume/joshua-dumandan-resume.html'
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt - (c) ${new Date().getFullYear()} Joshua Dumandan`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/your-linkedin',
      'target': '_blank',
      'aria-label': 'Joshua Dumandan on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/your-github',
      'target': '_blank',
      'aria-label': 'Joshua Dumandan on GitHub'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:your-email@example.com',
      'target': '_self',
      'aria-label': 'Email Joshua Dumandan'
    }]
  }
})
