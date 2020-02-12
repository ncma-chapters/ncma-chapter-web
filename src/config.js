// Depenencies.
import moment from 'moment';
// Relative imports.
import aboutBannerImage from './assets/pictures/about_banner.png';
import aboutHeroImage from './assets/pictures/about_header.png';
import eventsHeroImage from './assets/pictures/events_hero.png';
import blog from './assets/social/blog.svg';
import caseyImage from './assets/team_members/casey.png';
import fb from './assets/social/fb.svg';
import harperImage from './assets/team_members/harper.png';
import homeHeroImage from './assets/pictures/home_hero.png';
import instagram from './assets/social/instagram.svg';
import jordanImage from './assets/team_members/jordan.png';
import linkedin from './assets/social/linkedin.svg';
import logo from './assets/critical_images/logo.svg';
import missionImage from './assets/pictures/mission.png';
import presidentMessageImage from './assets/pictures/president_message_pen.png';
import samImage from './assets/team_members/sam.png';
import twitter from './assets/social/twitter.svg';
import visionImage from './assets/pictures/vision.png';

export default {
  callToAction: {
    label: 'JOIN US',
    href: '/membership',
    // Optional.
    label2: 'LEARN MORE',
  },
  chapterName: 'Monmouth',
  contact: {
    email: 'info@ncmamonmouth.com',
    formattedAddress: 'P.O. Box 1234, Spring Lake, NJ 22222',
    formattedPhoneNumber: '(201) 555 - 1212',
    phoneNumber: '2015551212',
  },
  content: {
    home: {
      heroImage: homeHeroImage,
      section1Header: 'WHY NCMA IS THE PLACE FOR CONTRACT MANAGERS',
      section1Text1:
        'NCMA will connect you to an active support network for federal, commercial, and military contract managers. We are the world’s leading resource for professionals in the contract management field.',
      section1VideoSrc: 'https://www.youtube.com/embed/ntJJCABX_UQ?controls=0',
      bannerHeader: "LET'S DO THIS TOGETHER",
      bannerText:
        'The National Contract Management Association, Monmouth, NJ chapter serves the needs of contract management professionals in central New Jersey.',
      section2Header: 'ABOUT OUR CHAPTER',
      section2SubHeader1: 'OUR VISION',
      section2SubHeader1Text1:
        'NCMA Monmouth will lead in defining the standards and the body of knowledge for the contract management profession. We will provide advocacy, training, education, and certifications that enable the entry, development, and advancement of all contract management professionals in central New Jersey.',
      section2SubHeader1ImageAlt: 'The team that leads our vision.',
      section2SubHeader1ImageSrc: visionImage,
      section2SubHeader2ImageAlt: 'The team that defines our mission.',
      section2SubHeader2ImageSrc: missionImage,
      section2SubHeader2: 'OUR MISSION',
      section2SubHeader2Text1:
        'NCMA Monmouth serves the needs of contract management professionals in central New Jersey, giving its members access to the best and brightest minds in contract management in our region. We advance the contract management profession through advocacy and the execution of programs to connect NCMA members and enable their professional development.',
      section2SubHeader3: 'MEET OUR LEADERSHIP TEAM',
      section3Header: 'JOIN NCMA MONMOUTH',
      section3SubHeader1ImageAlt: 'A message from our president.',
      section3SubHeader1ImageSrc: presidentMessageImage,
      section3SubHeader1: 'A MESSAGE FROM THE PRESIDENT',
      section3SubHeader1Text1:
        'We have a great year planned for NCMA members! NCMA Monmouth President Jordan Smith has five reasons why you should join NCMA today.',
    },
    about: {
      heroImage: aboutHeroImage,
      section1Header: 'WE ARE NCMA MONMOUTH',
      section1Text1:
        'We provide a venue for government and industry to interact, learn together, network, share best practices, and further the field of contract management for the communities that we serve.',
      section1Text2:
        'Our members have access to the best training and have opportunities to network with key contacts to help them meet and exceed their professional goals.',
      section2Header: 'OUR STORY',
      section2Text1:
        'The NCMA Monmouth chapter covers a vibrant section of central New Jersey, including the communities of Long Branch, Asbury Park, Freehold Township and Toms River. Strategically located new the state capital of Trenton to the west and New York City to the north, NCMA Monmouth welcomes members of all areas.',
      section2Text2:
        'Our chapter received a charter from NCMA headquarters on January 1, 2020, because employees in central New Jersey wanted a chapter closer to their location.',
      section2Text3:
        'We look forward to growing and learning with you and promoting the benefits of contract management in our region.',
      section3Header: 'MEET OUR OFFICERS',
      section4Header: 'WE ARE HERE FOR YOU',
      section4Text1:
        'NCMA membership will keep you current on government contracting issues and changes, as well as giving you access to peers both in central New Jersey and in 90 chapters across the country.',
      section4Text2:
        'Joining NCMA will help you put your career on a fast track to success and give you opportunities and specialized training only available to our members.',
      section4ImageAlt: 'About NCMA Monmouth',
      section4ImageSrc: aboutBannerImage,
    },
    events: {
      heroImage: eventsHeroImage,
      section1Header: 'EVENTS',
    },
  },
  events: [
    {
      id: 1,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('February 22, 2020'),
    },
    {
      id: 2,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('February 22, 2020'),
    },
    {
      id: 3,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('February 22, 2020'),
    },
    {
      id: 4,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('February 22, 2020'),
    },
    {
      id: 5,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('February 22, 2020'),
    },
    {
      id: 6,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('February 22, 2020'),
    },
    {
      id: 7,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('February 22, 2020'),
    },
  ],
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Events',
      href: '/events',
    },
    {
      label: 'Membership',
      href: '/membership',
    },
    {
      label: 'Contact Us',
      href: '/contact',
    },
  ],
  logo,
  socialLinks: [
    {
      label: 'Fb',
      href: 'https://facebook.com',
      imagePath: fb,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com',
      imagePath: twitter,
    },
    {
      label: 'Linkedin',
      href: 'https://linkedin.com',
      imagePath: linkedin,
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      imagePath: instagram,
    },
    {
      label: 'Blog',
      href: 'https://medium.com',
      imagePath: blog,
    },
  ],
  teamMembers: [
    {
      id: 1,
      firstName: 'Jordan',
      lastName: 'Smith',
      image: jordanImage,
      role: 'President',
      quote: '',
      bio1: '',
      bio2: '',
      bio3: '',
      email: '',
    },
    {
      id: 2,
      firstName: 'Casey',
      lastName: 'Mills',
      image: caseyImage,
      role: 'President - Elect',
      quote: '',
      bio1: '',
      bio2: '',
      bio3: '',
      email: '',
    },
    {
      id: 3,
      firstName: 'Harper',
      lastName: 'Cullen',
      image: harperImage,
      role: 'Treasurer',
      quote: '',
      bio1: '',
      bio2: '',
      bio3: '',
      email: '',
    },
    {
      id: 4,
      firstName: 'Sam',
      lastName: 'Manning',
      image: samImage,
      role: 'Secretary',
      quote: '',
      bio1: '',
      bio2: '',
      bio3: '',
      email: '',
    },
  ],
};
