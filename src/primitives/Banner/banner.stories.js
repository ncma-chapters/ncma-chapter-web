// Node modules..
import React from 'react';
import { storiesOf } from '@storybook/react';
// Relative imports.
import Banner from './index';

storiesOf('Primitives', module).add('Banner', () => <Banner>Hello World</Banner>);
