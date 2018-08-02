import React from 'react'
import Game from './game'
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Game />);
});