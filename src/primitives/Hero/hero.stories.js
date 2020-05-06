// Node modules..
import React from 'react';
import get from 'lodash/get';
import { storiesOf } from '@storybook/react';
// Relative imports.
import config from '../../config';
import Hero from './index';

storiesOf('Primitives', module).add('Hero', () => <Hero url={get(config, 'content.home.heroImage')} />);
