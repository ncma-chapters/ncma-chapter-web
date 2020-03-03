// Depenencies.
import moment from 'moment';
// Relative imports.
import aboutBannerImage from './assets/pictures/about_banner.png';
import aboutHeroImage from './assets/pictures/about_header.png';
import aboutOurStoryImage from './assets/pictures/about_our_story.png';
import blog from './assets/social/blog.svg';
import caseyImage from './assets/team_members/casey.png';
import contactHeroImage from './assets/pictures/contact_header.png';
import eventsHeroImage from './assets/pictures/events_hero.png';
import fb from './assets/social/fb.svg';
import harperImage from './assets/team_members/harper.png';
import homeHeroImage from './assets/pictures/home_hero.png';
import instagram from './assets/social/instagram.svg';
import jordanImage from './assets/team_members/jordan.png';
import linkedin from './assets/social/linkedin.svg';
import logo from './assets/critical_images/logo.svg';
import membershipBecomeAMemberImage from './assets/pictures/memebership_become_a_member.png';
import membershipCertificationsImage from './assets/pictures/membership_certification_programs.png';
import membershipConferencesImage from './assets/pictures/membership_conferences.png';
import membershipHeroImage from './assets/pictures/membership_header.png';
import membershipLearningImage from './assets/pictures/membership_learning.png';
import membershipMagazineImage from './assets/pictures/membership_cm_magazine.png';
import membershipSeminarsImage from './assets/pictures/membership_seminars.png';
import missionImage from './assets/pictures/mission.png';
import presidentMessageImage from './assets/pictures/president_message_pen.png';
import samImage from './assets/team_members/sam.png';
import twitter from './assets/social/twitter.svg';
import visionImage from './assets/pictures/vision.png';

/*
 *
 *
 * ** WARNING **: Be sure to update `gatsby-config.js`'s `siteMetadata.siteUrl`,
 * otherwise we will fail to generate both a sitemap and a robots.txt.
 *
 */

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
    formattedAddress: '23 Christopher Way, Eatontown, NJ, 07724',
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
        'The NCMA Monmouth chapter has a long and distinguished history of serving central New Jersey and the contract managers that interact regularly with local, state, and federal government.',
      section2Text2:
        'Our chapter received a charter from NCMA headquarters in 1970 to support the military community at Fort Monmouth, New Jersey. We provided programing, training opportunities, and scholarship programs for government workers and officials stationed there.',
      section2Text3:
        'Although Fort Monmouth was closed by the Base Realignment and Closure Commission in 2005, many NCMA members with ties to the base remained in the area and are active in NCMA Monmouth to this day. Today we serve a more diversified membership of contractors and civil employees representing local, state, and federal government.',
      section2Text4:
        'Now in our 50th year, we are proud to help contract managers navigate the rapidly evolving world of contract management in the 21st century. Our members live and work in a dynamic section of central New Jersey, including the communities of Long Branch, Asbury Park, Freehold Township and Toms River.',
      section2Text5:
        'Strategically located near the state capital of Trenton to the west and New York City to the north, the NCMA Monmouth chapter looks forward to growing and learning with you and promoting the benefits of contract management in our region.',
      section2ImageAlt: 'NCMA Monmouth goes back 50 years...',
      section2ImageSrc: aboutOurStoryImage,
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
    membership: {
      heroImage: membershipHeroImage,
      section1Header: 'BECOME A MEMBER. BECOME UNSTOPPABLE.',
      section1Text1:
        "NCMA membership connects you to a community of experts in your field. We've drawn tens of thousands of the best contract management professionals because we focus on:",
      section1Point1: 'Quality content that builds better leaders',
      section1Point2: 'Creating opportunities to bridge the industry-government divide',
      section1Point3: 'Making the world smaller through strong local Chapter communities',
      section1Point4: 'Certifications that show the world your potential',
      section1Text2: "If you're looking for these kinds of opportunities, tools, and access, you're one of us already.",
      section1ImageAlt: 'Become a NCMA Monmouth member today!',
      section1ImageSrc: membershipBecomeAMemberImage,
      section2Header: 'BENEFITS OF MEMBERSHIP',
      section2Text1:
        'Gain a professional advantage with access to valuable member-only content—including seminars, e-courses, and conferences — all at your fingertips.',
      section2Text2:
        'NCMA’s virtual education events provide accessible, affordable training for both individuals and work teams. The lessons learned in our courses can give your team an advantage the next time you compete for a contract. Or it may help you stay ahead of the curve by giving you the certification you need to land your next career role.',
      section2Text3:
        'And if that wasn’t enough, NCMA members get a front seat to the best contract management thought leadership on local, national, and global levels. Whether you’re attending one of our local forums or an NCMA national conference, you’ll be learning from, and interacting with, the best in the field, all the while making valuable connections.',
      section2Text4: 'You can never be too prepared for success.',
      benefit1Title: 'CONFERENCES',
      benefit1Description:
        'Learn from subject matter experts at a pace that fits your schedule and puts you in the position to make lasting connections.',
      benefit1ImageAlt: 'Attend NCMA Monmouth conferences',
      benefit1ImageSrc: membershipConferencesImage,
      benefit1Link: '',
      benefit2Title: 'SEMINARS',
      benefit2Description:
        "You don't have to be a contract management expert to attend our educational seminars. These one-day events are conveniently offered in a number of locations at a preferred rate for NCMA members.",
      benefit2ImageAlt: 'Attend NCMA Monmouth seminars',
      benefit2ImageSrc: membershipSeminarsImage,
      benefit2Link: '',
      benefit3Title: 'CERTIFICATION PROGRAMS',
      benefit3Description:
        'Being an NCMA member gives you access to a variety of certification resources at a more cost-effective rate. From practice exams to Online Preparatory courses, industry knowledge is just a few clicks away.',
      benefit3ImageAlt: 'Utilize NCMA Monmouth certification programs',
      benefit3ImageSrc: membershipCertificationsImage,
      benefit3Link: '',
      benefit4Title: 'CM MAGAZINE',
      benefit4Description:
        "Contract Management Magazine is NCMA's award-winning flagship publication, now available both digitally and in print.",
      benefit4ImageAlt: 'Get access to the NCMA Contract Management Magazine',
      benefit4ImageSrc: membershipMagazineImage,
      benefit4Link: '',
      benefit5Title: 'E-LEARNING COURSES',
      benefit5Description:
        "Studying at your own pace is just one perk of taking NCMA's e-courses. Our virtual education is the perfect way to access anything you need! No matter where you are on your career path, NCMA has resources for you.",
      benefit5ImageAlt: 'Learn with NCMA e-learning courses',
      benefit5ImageSrc: membershipLearningImage,
      benefit5Link: '',
      section3Header: 'MEMBERSHIP DETAILS',
      section3Text1: 'Select the membership that best fits your career stage.',
    },
    contact: {
      heroImage: contactHeroImage,
      section1Header: "WE'D LOVE TO HEAR FROM YOU",
      section1Text1:
        "We can't wait to meet you and join you on your career as a contract management professional. If you have any questions about our events or joining NCMA Monmouth, then reach us here.",
      section2Header1: 'ALL INQUIRIES',
      section2Header2: 'EVENT INQUIRIES',
      section3Header: 'OFFICE LOCATION',
    },
  },
  events: [
    {
      id: 1,
      title: 'Industry Best Practices Seminar',
      description:
        'Contract changes are inevitable and must be anticipated and properly managed. This one-day seminar will provide the information you need to handle any and all ambiguities, differences of opinion, or potential and real conflicts between the parties.',
      image: aboutHeroImage,
      startsAt: moment('2020-22-02'),
    },
  ],
  membershipPlans: [
    {
      id: 1,
      title: 'General',
      description: 'Join our community contract managers with our standard membership.',
      priceUSDAnnual: 160,
      initiationFee: 25,
    },
    {
      id: 2,
      title: 'New Professional',
      description: 'An introductory rate for those just starting their careers. Must be age 33 and younger.',
      priceUSDAnnual: 95,
      initiationFee: 25,
    },
    {
      id: 3,
      title: 'Retirees',
      description:
        'Maintain your connections after retirement. You must be retired and not employed full-time in contract management.',
      priceUSDAnnual: 75,
      initiationFee: 25,
    },
    {
      id: 4,
      title: 'Students',
      description: 'A reduced rate for full-time students in a degree-granting institution.',
      priceUSDAnnual: 45,
      initiationFee: 25,
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
    // {
    //   label: 'Events',
    //   href: '/events',
    // },
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
  termsOfServiceURL: 'https://app.termly.io/document/terms-of-use-for-website/35132b22-3bfc-4326-b3b0-6fa59ca11438',
  privacyPolicyURL: 'https://app.termly.io/document/privacy-policy/577597a3-bb6e-48ab-b48e-db5e31face3c',
};
