import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import FourOFour from '../../components/404';

const setup = () => shallow(<FourOFour />);

describe('404 component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.four-o-four');
    expect(element.length).toEqual(1);
  });

  test('renders the header text of the Home page', () => {
    const header = component.find('.fof-header');
    expect(header).toMatchSnapshot();
  });

  test('renders the pagenotfound the page', () => {
    const pagenotfound = component.find('.fof-not-found');
    expect(pagenotfound).toMatchSnapshot();
  });
});
