import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Cards', module)
  .add('Note', () => <Card>Hello World</Card>)
  .add('Twitter', () => <Card cardType="twitter">Hello World</Card>)
  .add('Article', () => <Card cardType="article">Hello World</Card>);
