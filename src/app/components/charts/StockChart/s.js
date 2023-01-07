import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/plots';

const StockPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  //   json.data.trades.AAPL
  const asyncFetch = () => {
    fetch('http://localhost:8080')
      .then(response => response.json())
      .then(json => {
        console.log(json.data);
        setData(json.data);
      })
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    appendPadding: [0, 10, 0, 0],
    data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    slider: {},
  };

  return <Stock {...config} />;
};

export default StockPlot;
