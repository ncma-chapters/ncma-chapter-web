// Node modules.
import React from 'react';
import { storiesOf } from '@storybook/react';
// Relative imports.
import Link from './index';

storiesOf('Primitives', module).add('Link', () => <Link href="/">Hello World</Link>);
