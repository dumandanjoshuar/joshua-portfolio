import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'About',
  icon: 'i-lucide-user',
  to: '/about'
}, {
  label: 'Projects',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Experience',
  icon: 'i-lucide-briefcase-business',
  to: '/experience'
}, {
  label: 'Contact',
  icon: 'i-lucide-mail',
  to: '/contact'
}]
