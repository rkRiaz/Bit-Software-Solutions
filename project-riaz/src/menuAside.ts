import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiClipboardListOutline ,
  mdiTelevisionGuide,
  mdiVuejs,
  mdiAccountMultiple ,
  mdiAccountPlus, 
  mdiAccountCheck,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    label: 'Client',
    icon: mdiAccountMultiple ,
    menu: [
      {
        href: '/client/all-clients',
        icon: mdiClipboardListOutline,
        label: 'All Clients'
      },
      {
        href: '/client/add-client',
        icon: mdiAccountPlus,
        label: 'Add Client'
      },
    ],
  },
  {
    label: 'Role',
    icon: mdiAccountCheck,
    menu: [
      {
        href: '/role/all-roles',
        icon: mdiClipboardListOutline,
        label: 'All Roles'
      },
      {
        href: '/role/add-role',
        icon: mdiAccountPlus,
        label: 'Add Role'
      },
    ],
  },
  // {
  //   href: '/tables',
  //   label: 'Tables',
  //   icon: mdiTable,
  // },
  // {
  //   href: '/forms',
  //   label: 'Forms',
  //   icon: mdiSquareEditOutline,
  // },
  // {
  //   href: '/ui',
  //   label: 'UI',
  //   icon: mdiTelevisionGuide,
  // },
  // {
  //   href: '/profile',
  //   label: 'Profile',
  //   icon: mdiAccountCircle,
  // },
  // {
  //   href: '/error',
  //   label: 'Error',
  //   icon: mdiAlertCircle,
  // },
  // {
  //   href: 'https://github.com/justboil/admin-one-react-tailwind',
  //   label: 'GitHub',
  //   icon: mdiGithub,
  //   target: '_blank',
  // }
]

export default menuAside
