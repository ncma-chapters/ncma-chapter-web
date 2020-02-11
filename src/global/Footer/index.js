// Dependencies.
import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import toUpper from 'lodash/toUpper';
// Relative imports.
import config from '../../config';
import {
  Address,
  Column,
  ColumnHeader,
  Copyright,
  FooterExternalLink,
  FooterLink,
  FooterLinks,
  Line,
  MainFooter,
  SocialIcon,
  SocialLink,
  SocialLinks,
  StyledLogo,
  SubFooter,
  SubFooterLink,
  SubFooterLinks,
  Wrapper,
} from './styles';

const Footer = () => {
  // Derive config properties.
  const chapterName = get(config, 'chapterName');
  const email = get(config, 'contact.email');
  const formattedAddress = get(config, 'contact.formattedAddress');
  const formattedPhoneNumber = get(config, 'contact.formattedPhoneNumber');
  const navItems = get(config, 'navItems');
  const phoneNumber = get(config, 'contact.phoneNumber');
  const socialLinks = get(config, 'socialLinks');

  // Derive the current year.
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <MainFooter>
        <Column>
          {/* Logo */}
          <StyledLogo />

          {/* Nav Items */}
          <FooterLinks>
            {map(navItems, (item) => {
              // Derive item properties.
              const label = get(item, 'label');
              const href = get(item, 'href');

              return (
                <FooterLink key={label} to={href}>
                  {toUpper(label)}
                </FooterLink>
              );
            })}
          </FooterLinks>
        </Column>

        {/* Vertical Line Separator */}
        <Line />

        <Column>
          {/* Header */}
          <ColumnHeader>KEEP CONNECTED</ColumnHeader>

          {/* Social Media Links */}
          <SocialLinks>
            {map(socialLinks, (link) => {
              // Derive social link properties.
              const label = get(link, 'label');
              const href = get(link, 'href');
              const imagePath = get(link, 'imagePath');

              return (
                <SocialLink key={label} href={href}>
                  <SocialIcon alt={label} src={imagePath} />
                </SocialLink>
              );
            })}
          </SocialLinks>

          {/* Contact Phone Number */}
          <FooterExternalLink href={`tel:${phoneNumber}`}>{formattedPhoneNumber}</FooterExternalLink>

          {/* Contact Email */}
          <FooterExternalLink href={`mailto:${email}`}>{email}</FooterExternalLink>
        </Column>

        {/* Vertical Line Separator */}
        <Line />

        <Column>
          {/* Header */}
          <ColumnHeader>EVENTS</ColumnHeader>

          {/* Event Links */}
          <FooterLinks>
            <FooterLink to="/events">Industry Best Practices Seminar</FooterLink>
            <FooterLink to="/events">Spring Chapter Meeting</FooterLink>
            <FooterLink to="/events">Industry Standards Symposium</FooterLink>
          </FooterLinks>

          {/* Events Link */}
          <FooterLink to="/events">See all events</FooterLink>
        </Column>
      </MainFooter>

      <SubFooter>
        <Copyright>
          &copy; {currentYear} NCMA {chapterName}
        </Copyright>

        <Address>{formattedAddress}</Address>

        <SubFooterLinks>
          <SubFooterLink to="/legal">Terms of Service</SubFooterLink>
          <SubFooterLink to="/legal">Privacy Policy</SubFooterLink>
          <SubFooterLink to="/legal">Cookie Policy</SubFooterLink>
        </SubFooterLinks>
      </SubFooter>
    </Wrapper>
  );
};

export default Footer;
