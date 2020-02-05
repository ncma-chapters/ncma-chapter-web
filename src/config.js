// Relative imports.
import logo from 'src/assets/critical_images/logo.svg';
import blog from 'src/assets/social/blog.svg';
import fb from 'src/assets/social/fb.svg';
import instagram from 'src/assets/social/instagram.svg';
import linkedin from 'src/assets/social/linkedin.svg';
import twitter from 'src/assets/social/twitter.svg';

export default {
  callToAction: {
    label: 'JOIN US',
    href: '/membership',
  },
  chapterName: 'Monmouth',
  contact: {
    email: 'info@ncmamonmouth.com',
    formattedAddress: 'P.O. Box 1234, Spring Lake, NJ 22222',
    formattedPhoneNumber: '(201) 555 - 1212',
    phoneNumber: '2015551212',
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
};
