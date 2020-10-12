/* eslint-disable no-console */
// import React from 'react';
// import ReactDOM from 'react-dom';
const { React, ReactDOM } = window;

let n = 0;

function render() {
  const title = React.createElement(
    'h1',
    {},
    'Bonjour tout le monde ',
    React.createElement('span', {}, n)
  );
  ReactDOM.render(title, document.querySelector('#app'));
}

render();

window.setInterval(() => {
  n += 1;
  render();
}, 1000);
