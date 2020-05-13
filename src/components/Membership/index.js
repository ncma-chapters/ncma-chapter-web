// Node modules.
import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
import Column from '../../primitives/Column';
import H2 from '../../primitives/H2';
import Hero from '../../primitives/Hero';
import Image from '../../primitives/Image';
import Layout from '../../global/Layout';
import Row from '../../primitives/Row';
import Section from '../../primitives/Section';
import Text from '../../primitives/Text';
import config from '../../config';
import {
  Benefit,
  BenefitTitle,
  StyledLink,
  Card,
  CardTitle,
  CardDescription,
  CardCost,
  CardCostLabel,
  InitiationFee,
} from './styles';

const Membership = () => {
  // Derive config properties.
  const content = get(config, 'content');
  const membershipPlans = get(config, 'membershipPlans');

  // Derive content properties.
  const heroImage = get(content, 'membership.heroImage');
  const section1Header = get(content, 'membership.section1Header');
  const section1Text1 = get(content, 'membership.section1Text1');
  const section1Point1 = get(content, 'membership.section1Point1');
  const section1Point2 = get(content, 'membership.section1Point2');
  const section1Point3 = get(content, 'membership.section1Point3');
  const section1Point4 = get(content, 'membership.section1Point4');
  const section1Text2 = get(content, 'membership.section1Text2');
  const section1ImageAlt = get(content, 'membership.section1ImageAlt');
  const section1ImageSrc = get(content, 'membership.section1ImageSrc');
  const section2Header = get(content, 'membership.section2Header');
  const section2Text1 = get(content, 'membership.section2Text1');
  const section2Text2 = get(content, 'membership.section2Text2');
  const section2Text3 = get(content, 'membership.section2Text3');
  const section2Text4 = get(content, 'membership.section2Text4');
  const benefit1Title = get(content, 'membership.benefit1Title');
  const benefit1Description = get(content, 'membership.benefit1Description');
  const benefit1ImageAlt = get(content, 'membership.benefit1ImageAlt');
  const benefit1ImageSrc = get(content, 'membership.benefit1ImageSrc');
  // const benefit1Link = get(content, 'membership.benefit1Link');
  const benefit2Title = get(content, 'membership.benefit2Title');
  const benefit2Description = get(content, 'membership.benefit2Description');
  const benefit2ImageAlt = get(content, 'membership.benefit2ImageAlt');
  const benefit2ImageSrc = get(content, 'membership.benefit2ImageSrc');
  // const benefit2Link = get(content, 'membership.benefit2Link');
  const benefit3Title = get(content, 'membership.benefit3Title');
  const benefit3Description = get(content, 'membership.benefit3Description');
  const benefit3ImageAlt = get(content, 'membership.benefit3ImageAlt');
  const benefit3ImageSrc = get(content, 'membership.benefit3ImageSrc');
  // const benefit3Link = get(content, 'membership.benefit3Link');
  const benefit4Title = get(content, 'membership.benefit4Title');
  const benefit4Description = get(content, 'membership.benefit4Description');
  const benefit4ImageAlt = get(content, 'membership.benefit4ImageAlt');
  const benefit4ImageSrc = get(content, 'membership.benefit4ImageSrc');
  // const benefit4Link = get(content, 'membership.benefit4Link');
  const benefit5Title = get(content, 'membership.benefit5Title');
  const benefit5Description = get(content, 'membership.benefit5Description');
  const benefit5ImageAlt = get(content, 'membership.benefit5ImageAlt');
  const benefit5ImageSrc = get(content, 'membership.benefit5ImageSrc');
  // const benefit5Link = get(content, 'membership.benefit5Link');
  const section3Header = get(content, 'membership.section3Header');
  const section3Text1 = get(content, 'membership.section3Text1');

  return (
    <Layout>
      <Hero url={heroImage} />

      <Section>
        <H2>{section1Header}</H2>

        <Row smallScreenStyles={{ margin: '0 0 20px' }}>
          <Column>
            <Text>{section1Text1}</Text>
            <Text largeScreenStyles={{ margin: '0' }} smallScreenStyles={{ margin: '0 0 10px' }}>
              -- {section1Point1}
            </Text>
            <Text largeScreenStyles={{ margin: '0' }} smallScreenStyles={{ margin: '0 0 10px' }}>
              -- {section1Point2}
            </Text>
            <Text largeScreenStyles={{ margin: '0' }} smallScreenStyles={{ margin: '0 0 10px' }}>
              -- {section1Point3}
            </Text>
            <Text largeScreenStyles={{ margin: '0' }} smallScreenStyles={{ margin: '0 0 10px' }}>
              -- {section1Point4}
            </Text>
            <Text largeScreenStyles={{ margin: '50px 0 0' }} smallScreenStyles={{ marginTop: '40px' }}>
              {section1Text2}
            </Text>
          </Column>
          <Image alt={section1ImageAlt} largeScreenStyles={{ maxWidth: '325px' }} src={section1ImageSrc} />
        </Row>
      </Section>

      <Section>
        <H2>{section2Header}</H2>
        <Text>{section2Text1}</Text>
        <Text>{section2Text2}</Text>
        <Text>{section2Text3}</Text>
        <Text>{section2Text4}</Text>
      </Section>

      <Section>
        <Benefit>
          <Column>
            <BenefitTitle>{benefit1Title}</BenefitTitle>
            <Row largeScreenStyles={{ margin: '0' }}>
              <Text largeScreenStyles={{ margin: '20px 0 0' }}>{benefit1Description}</Text>
              {/* <StyledLink href={benefit1Link}>Learn More</StyledLink> */}
            </Row>
          </Column>
          <Image
            alt={benefit1ImageAlt}
            largeScreenStyles={{ maxWidth: '230px' }}
            smallScreenStyles={{ margin: '0 0 60px' }}
            src={benefit1ImageSrc}
          />
        </Benefit>

        <Benefit>
          <Column>
            <BenefitTitle>{benefit2Title}</BenefitTitle>
            <Row largeScreenStyles={{ margin: '0' }}>
              <Text largeScreenStyles={{ margin: '20px 0 0' }}>{benefit2Description}</Text>
              {/* <StyledLink href={benefit2Link}>Learn More</StyledLink> */}
            </Row>
          </Column>
          <Image
            alt={benefit2ImageAlt}
            largeScreenStyles={{ maxWidth: '230px' }}
            smallScreenStyles={{ margin: '0 0 60px' }}
            src={benefit2ImageSrc}
          />
        </Benefit>

        <Benefit>
          <Column>
            <BenefitTitle>{benefit3Title}</BenefitTitle>
            <Row largeScreenStyles={{ margin: '0' }}>
              <Text largeScreenStyles={{ margin: '20px 0 0' }}>{benefit3Description}</Text>
              {/* <StyledLink href={benefit3Link}>Learn More</StyledLink> */}
            </Row>
          </Column>
          <Image
            alt={benefit3ImageAlt}
            largeScreenStyles={{ maxWidth: '230px' }}
            smallScreenStyles={{ margin: '0 0 60px' }}
            src={benefit3ImageSrc}
          />
        </Benefit>

        <Benefit>
          <Column>
            <BenefitTitle>{benefit4Title}</BenefitTitle>
            <Row largeScreenStyles={{ margin: '0' }}>
              <Text largeScreenStyles={{ margin: '20px 0 0' }}>{benefit4Description}</Text>
              {/* <StyledLink href={benefit4Link}>Learn More</StyledLink> */}
            </Row>
          </Column>
          <Image
            alt={benefit4ImageAlt}
            largeScreenStyles={{ maxWidth: '230px' }}
            smallScreenStyles={{ margin: '0 0 60px' }}
            src={benefit4ImageSrc}
          />
        </Benefit>

        <Benefit>
          <Column>
            <BenefitTitle>{benefit5Title}</BenefitTitle>
            <Row largeScreenStyles={{ margin: '0' }}>
              <Text largeScreenStyles={{ margin: '20px 0 0' }}>{benefit5Description}</Text>
              {/* <StyledLink href={benefit5Link}>Learn More</StyledLink> */}
            </Row>
          </Column>
          <Image
            alt={benefit5ImageAlt}
            largeScreenStyles={{ maxWidth: '230px' }}
            smallScreenStyles={{ margin: '0 0 60px' }}
            src={benefit5ImageSrc}
          />
        </Benefit>
      </Section>

      <Section>
        <H2>{section3Header}</H2>
        <Text>{section3Text1}</Text>
        <Text>
          To download a printable membership application,{' '}
          <StyledLink
            href="https://www.ncmahq.org/docs/default-source/community-files/mem19---membership-application.pdf"
            rel="noopener noreferrer"
            largeScreenStyles={{ margin: '0' }}
          >
            click here
          </StyledLink>{' '}
          and don&apos;t forget to list your chapter as NCMA Monmouth!
        </Text>

        <Row largeScreenStyles={{ margin: '50px 0 100px' }}>
          {map(membershipPlans, (plan) => {
            // Derive plan properties.
            const id = get(plan, 'id');
            const title = get(plan, 'title');
            const description = get(plan, 'description');
            const priceUSDAnnual = get(plan, 'priceUSDAnnual');
            const initiationFee = get(plan, 'initiationFee');

            return (
              <Card key={id}>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardCost>
                  {priceUSDAnnual.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}
                </CardCost>
                <CardCostLabel>Annually</CardCostLabel>
                <InitiationFee>
                  {initiationFee.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}{' '}
                  Initiation Fee
                </InitiationFee>
              </Card>
            );
          })}
        </Row>
      </Section>
    </Layout>
  );
};

export default Membership;
