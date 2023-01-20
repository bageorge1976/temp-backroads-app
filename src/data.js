import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
  ];

export const socialLinks = [
  {id:1, href: 'https://www.twitter.com', icon:'fab fa-facebook' },
  {id:2, href: 'https://www.twitter.com', icon:'fab fa-twitter' },
  {id:3, href: 'https://www.twitter.com', icon:'fab fa-squarespace'},
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date:'august 1st, 2020',
    title: 'Tibet Adventure',
    info: 'Info for tours id 1',
    location: 'china',
    duration: 6,
    cost:2100

  },
  {
    id: 2,
    image: tour2,
    date:'august 2nd, 2020',
    title: 'Argentina Adventure',
    info: 'Info for tours id 2',
    location: 'Argentina',
    duration: 7,
    cost:2200

  },
  {
    id: 3,
    image: tour3,
    date:'august 3rd, 2021',
    title: 'Israel Adventure',
    info: 'Info for tours id 3',
    location: 'Israel',
    duration: 3,
    cost:2200

  },
  {
    id: 4,
    image: tour4,
    date:'july 4th, 2020',
    title: 'Moldova Adventure',
    info: 'Info for tours id 4',
    location: 'Moldova',
    duration: 8,
    cost:2000

  },
  {
    id: 5,
    image: tour5,
    date:'September 5th, 2022',
    title: 'Russia Adventure',
    info: 'Info for tours id 5',
    location: 'Russia',
    duration: 12,
    cost:5000

  },
  {
    id: 6,
    image: tour6,
    date:'October 6th, 2023',
    title: 'Canada Adventure',
    info: 'Info for tours id 6',
    location: 'Canada',
    duration: 9,
    cost:4000

  },
];