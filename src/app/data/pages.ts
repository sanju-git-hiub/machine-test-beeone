import { StaticImages } from './image';


interface Pages {
  name: string;
  link: string;
  icon: string;
}

export const Screens: Pages[] = [
  {
    name: 'Dashboard',
    link: '#',
    icon: StaticImages.home,
  },
  {
    name: 'E Wallets',
    link: '#',
    icon: StaticImages.wallet,
  },
  {
    name: 'Affiliates',
    link: '#',
    icon: StaticImages.affiliate,
  },
  {
    name: 'Events',
    link: '#',
    icon: StaticImages.events,
  },
  {
    name: 'Payments',
    link: '#',
    icon: StaticImages.payment,
  },
  {
    name: 'Manage my Business',
    link: '#',
    icon: StaticImages.business,
  },
  {
    name: 'Settings',
    link: '#',
    icon: StaticImages.settings,
  },
 
];
