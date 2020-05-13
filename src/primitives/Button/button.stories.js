// Node modules.
import React from 'react';
import { storiesOf } from '@storybook/react';
// Relative imports.
import Button from './index';

storiesOf('Primitives', module).add('Button', () => <Button>Click Me</Button>);
