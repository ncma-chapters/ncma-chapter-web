// Dependencies.
import React, { Component } from 'react';
import get from 'lodash/get';
// Relative imports.
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import H3 from '../../primitives/H3';
import Hero from '../../primitives/Hero';
import Layout from '../../global/Layout';
import Line from '../../primitives/Line';
import Row from '../../primitives/Row';
import Section from '../../primitives/Section';
import Text from '../../primitives/Text';
import config from '../../config';
import { Acknowledgement, ContactForm, FieldGroup, Input, Label, StyledLink, SubmitButton, Textarea } from './styles';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      phoneNumber: '',
    };
  }

  onSubmit = () => {
    // const { firstName, lastName, phoneNumber, email, message } = this.state;
    // Make request to send message.
  };

  onStateChange = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  render() {
    const { onSubmit, onStateChange } = this;
    const { firstName, lastName, phoneNumber, email, message } = this.state;

    // Derive config properties.
    const chapterName = get(config, 'chapterName');
    const contact = get(config, 'contact');
    const content = get(config, 'content');

    // Derive contact properties.
    const formattedAddress = get(contact, 'formattedAddress');
    const formattedPhoneNumber = get(contact, 'formattedPhoneNumber');
    const contactEmail = get(contact, 'email');

    // Derive content properties.
    const heroImage = get(content, 'contact.heroImage');
    const section1Header = get(content, 'contact.section1Header');
    const section1Text1 = get(content, 'contact.section1Text1');
    const section2Header1 = get(content, 'contact.section2Header1');
    const section2Header2 = get(content, 'contact.section2Header2');
    const section3Header = get(content, 'contact.section3Header');

    return (
      <Layout>
        <Hero url={heroImage} />

        <Section>
          <H2>{section1Header}</H2>
          <Text largeScreenStyles={{ marginBottom: '0' }}>{section1Text1}</Text>
        </Section>

        <Section>
          <Row largeScreenStyles={{ marginBottom: '0' }}>
            <Column smallScreenStyles={{ marginBottom: '50px', width: '100%' }}>
              <H3 largeScreenStyles={{ marginBottom: '50px' }} smallScreenStyles={{ marginBottom: '20px' }}>
                {section2Header1}
              </H3>
              <FieldGroup>
                <Label>Phone</Label>
                <Text>{formattedPhoneNumber}</Text>
              </FieldGroup>
              <FieldGroup>
                <Label>Email</Label>
                <Text largeScreenStyles={{ marginBottom: '20px' }}>{contactEmail}</Text>
              </FieldGroup>

              <Line />

              <H3 largeScreenStyles={{ margin: '20px 0 50px' }} smallScreenStyles={{ margin: '5px 0 20px' }}>
                {section2Header2}
              </H3>
              <FieldGroup>
                <Label>Phone</Label>
                <Text>{formattedPhoneNumber}</Text>
              </FieldGroup>
              <FieldGroup>
                <Label>Email</Label>
                <Text>{contactEmail}</Text>
              </FieldGroup>
            </Column>

            <ContactForm onSubmit={onSubmit}>
              <H3 largeScreenStyles={{ textAlign: 'center' }}>GET IN TOUCH</H3>
              <Row largeScreenStyles={{ margin: '30px 0 0' }} smallScreenStyles={{ margin: '0' }}>
                <Input
                  placeholder="First Name"
                  onChange={onStateChange('firstName')}
                  largeScreenStyles={{ marginRight: '10px' }}
                  smallScreenStyles={{ marginTop: '20px' }}
                  type="text"
                  value={firstName}
                />
                <Input placeholder="Last Name" onChange={onStateChange('lastName')} type="text" value={lastName} />
              </Row>
              <Input placeholder="Email" onChange={onStateChange('email')} type="email" value={email} />
              <Input
                placeholder="Phone Number"
                onChange={onStateChange('phoneNumber')}
                type="text"
                value={phoneNumber}
              />
              <Textarea
                placeholder="Your message"
                onChange={onStateChange('message')}
                rows="7"
                type="text"
                value={message}
              />
              <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
              <Acknowledgement>
                By clicking on SUBMIT, you acknowledge having read our{' '}
                <StyledLink to="/privacy">privacy policy</StyledLink>.
              </Acknowledgement>
            </ContactForm>
          </Row>
        </Section>

        <Section>
          <H2>{section3Header}</H2>
          <Row>
            <Column smallScreenStyles={{ width: '100%' }}>
              <H3 largeScreenStyles={{ marginBottom: '20px' }}>NCMA {chapterName} HQ</H3>
              <Text>{formattedAddress}</Text>
            </Column>
          </Row>
        </Section>
      </Layout>
    );
  }
}

export default Contact;
