import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';

import NewPost from './newPost';

it('show a div', () => {
  const wrapped = shallow(<NewPost />)
  expect(wrapped.find("img").length).toEqual(1);
})
