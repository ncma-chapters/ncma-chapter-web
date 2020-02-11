// Dependencies.
import React from 'react';
import get from 'lodash/get';
import { storiesOf } from '@storybook/react';
// Relative imports.
import config from 'config';
import Video from './index';

storiesOf('Primitives', module).add('Video', () => (
  <Video
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    frameborder="0"
    src={get(config, 'content.home.section1VideoSrc')}
  />
));
