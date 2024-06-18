import React from 'react';

import Card from './UI/Card';

const Result = (props) => {
  const result = props.result;
  const image = result && result.image;
  return (
    <section>
      <Card>
        <p>Test: 123mm</p>
        <p>Test: 123mm</p>
        <p>Test: 123mm</p>
        <p>Test: 123mm</p>
        <p>Test: 123mm</p>
        <p>Test: 123mm</p>
      </Card>
    </section>
  );
};

export default Result;
