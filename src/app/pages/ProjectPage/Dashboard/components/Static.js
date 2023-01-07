import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Button } from 'antd';

import './custom.style.scss';

const StaticBar = () => (
  <div className="site-statistic-demo-card">
    <Row gutter={24}>
      <Col className="col-reset" span={6}>
        <Statistic title="Easy Account" value={112893} />
      </Col>
      <Col className="col-reset" span={6}>
        <Statistic title="Savings Account" value={62} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          More
        </Button>
      </Col>
      <Col className="col-reset" span={6}>
        <Card>
          <Statistic
            title="Money In"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col className="col-reset" span={6}>
        <Card>
          <Statistic
            title="Money Out"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default StaticBar;
