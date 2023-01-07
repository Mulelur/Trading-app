import React from 'react';
import { RingProgress } from '@ant-design/plots';

const BasicTinyRing = ({ color }) => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.2,
    color: ['#5B8FF9', color],
  };
  return <RingProgress {...config} />;
};

export default BasicTinyRing;
