// Dependencies.
import React, { Component } from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
// Relative imports.
import config from '../../config';
import Burger from '../../primitives/Burger';
import Logo from '../../primitives/Logo';
import { CallToAction, Content, MobileItems, Item, Items, Wrapper } from './styles';

class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onBurgerClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { onBurgerClick } = this;
    const { open } = this.state;

    return (
      <>
        <Wrapper>
          <Content>
            {/* Burger */}
            <Burger onClick={onBurgerClick} />

            {/* Logo */}
            <Logo />

            {/* Nav Items Desktop */}
            <Items>
              {map(get(config, 'navItems'), (item) => {
                // Derive item properties.
                const label = get(item, 'label');
                const href = get(item, 'href');

                return (
                  <Item key={label} to={href}>
                    {label}
                  </Item>
                );
              })}
            </Items>

            {/* Call To Action button */}
            <CallToAction to={get(config, 'callToAction.href')}>{get(config, 'callToAction.label')}</CallToAction>
          </Content>
        </Wrapper>
        {/* Nav Items Mobile */}
        <MobileItems hidden={!open}>
          {map(get(config, 'navItems'), (item) => {
            // Derive item properties.
            const label = get(item, 'label');
            const href = get(item, 'href');

            return (
              <Item key={label} to={href}>
                {label}
              </Item>
            );
          })}
          <CallToAction to={get(config, 'callToAction.href')}>{get(config, 'callToAction.label')}</CallToAction>
        </MobileItems>
      </>
    );
  }
}

export default NavTop;
