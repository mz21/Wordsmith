import React from 'React';
import renderer from 'react-test-renderer';
import NavBar from '../NavBar';

describe('<NavBar />', function() {
  it('renders correctly', function() {
    var tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
