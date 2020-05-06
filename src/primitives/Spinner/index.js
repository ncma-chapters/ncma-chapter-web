// Node modules.
import React from 'react';
// Relative
import { Bounce1, Bounce2, Bounce3, Wrapper } from './styles';

const Spinner = (props) => (
  // eslint-disable-next-line
  <Wrapper {...props}>
    <Bounce1 />
    <Bounce2 />
    <Bounce3 />
  </Wrapper>
);

export default Spinner;
