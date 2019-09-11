import React from 'react';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('bulbIcon', () => <ButtonIcon icon={bulbIcon} />)
  .add('active', () => <ButtonIcon icon={bulbIcon} active />)
  .add('logoutIcon', () => <ButtonIcon icon={logoutIcon} />)
  .add('penIcon', () => <ButtonIcon icon={penIcon} />)
  .add('plusIcon', () => <ButtonIcon icon={plusIcon} />)
  .add('twitterIcon', () => <ButtonIcon icon={twitterIcon} />);
