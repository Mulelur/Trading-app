import Address from './address';
import Identity from './identity';

import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';

const steps = [
  {
    title: 'Identity',
    content: <Identity />,
  },
  {
    title: 'Address',
    content: <Address />,
  },
  {
    title: 'Agreement',
    content: 'Last-content',
  },
];

const LinearStepper: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map(item => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default LinearStepper;
