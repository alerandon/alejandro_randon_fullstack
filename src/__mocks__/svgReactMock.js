const React = require('react');

function SvgReactMock(props) {
  return React.createElement('svg', { ...props });
}

module.exports = SvgReactMock;
