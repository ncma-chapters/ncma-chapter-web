// Dependencies.
import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
import Logo from '../../primitives/Logo';
import config from '../../config';
import { CallToAction, Content, Item, Items, Wrapper } from './styles';

const NavTop = () => (
  <Wrapper>
    <Content>
      {/* Logo */}
      <Logo />

      {/* Nav Items */}
      <Items>
        {map(get(config, 'navTop.items'), (item) => {
          // Derive item properties.
          const label = get(item, 'label');
          const href = get(item, 'href');

          return (
            <Item key={label} href={href}>
              {label}
            </Item>
          );
        })}
      </Items>

      {/* Call To Action button */}
      <CallToAction href={get(config, 'callToAction.href')}>{get(config, 'callToAction.label')}</CallToAction>
    </Content>
  </Wrapper>
);

export default NavTop;
