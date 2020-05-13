// Node modules.
import React from 'react';
import { storiesOf } from '@storybook/react';
// Relative imports.
import config from '../../config';
import LegalIframe from './index';

storiesOf('Primitives', module).add('LegalIframe', () => (
  <LegalIframe frameBorder="0" title="terms of service" src={config.termsOfServiceURL} />
));
