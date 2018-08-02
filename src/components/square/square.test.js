import React from 'react'
import Square from './square'
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Square />);
});