// Node modules.
import React from 'react';
import { storiesOf } from '@storybook/react';
// Relative imports.
import Text from './index';

storiesOf('Primitives', module).add('Text', () => <Text>Hello world</Text>);
