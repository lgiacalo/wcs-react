import React, { Fragment } from 'react';
import NumberOfSelectedArticles from './NumberOfSelectedArticles.container';
import Weight from './Weight.container';

const Info = () => (
  <Fragment>
    <NumberOfSelectedArticles />
    <Weight />
  </Fragment>
);

export default Info;
