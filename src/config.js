// Dependencies.
import uniqueId from 'lodash/uniqueId';
// Relative imports.
import blog from 'src/assets/social/blog.svg';
import fb from 'src/assets/social/fb.svg';
import homeHeroImage from 'src/assets/pictures/home_hero.png';
import instagram from 'src/assets/social/instagram.svg';
import linkedin from 'src/assets/social/linkedin.svg';
import logo from 'src/assets/critical_images/logo.svg';
import missionImage from 'src/assets/pictures/mission.png';
import presidentMessageImage from 'src/assets/pictures/president_message_pen.png';
import presidentImage from 'src/assets/pictures/membership_seminars.png';
import twitter from 'src/assets/social/twitter.svg';
import visionImage from 'src/assets/pictures/vision.png';

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
  },
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
      fullName: 'Jordan Smith',
      id: uniqueId(),
      image: presidentImage,
      role: 'President',
    },
    {
      fullName: 'Casey Mills',
      id: uniqueId(),
      image: presidentImage,
      role: 'President - Elect',
    },
    {
      fullName: 'Harper Cullen',
      id: uniqueId(),
      image: presidentImage,
      role: 'Treasurer',
    },
    {
      fullName: 'Sam Manning',
      id: uniqueId(),
      image: presidentImage,
      role: 'Secretary',
    },
  ],
};
