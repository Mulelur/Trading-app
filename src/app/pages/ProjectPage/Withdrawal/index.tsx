import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';

import { P } from 'app/components/common/typography/P/P';
import { PageContainer } from 'app/components/common/layout/PageContainer';
import { Col, Row } from 'antd';

import AjaxTable from 'app/components/Tables/AjaxTable';
import { ApiOutlined, SwapOutlined } from '@ant-design/icons';
import { themes } from 'styles/theme/themes';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

export function Withdrawal() {
  return (
    <PageContainer>
      <Content>
        <Row
          style={{
            alignItems: 'center',
          }}
        >
          <H1 style={{ paddingRight: '1rem' }}>Withdrawal</H1>
          <ApiOutlined
            style={{ fontSize: '24px', color: themes.light.textSecondary }}
          />
        </Row>
        <P>Link your bank!</P>
        <Row>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                style={{ padding: '1.5rem' }}
                alt="example"
                src="https://cdn.24.co.za/files/Cms/General/d/7062/36795309639147dfbee1cf09acc2084c.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="FNB"
              description="FNB integrations"
            />
          </Card>
        </Row>
      </Content>
    </PageContainer>
  );
}

// const Divider = styled.div`
//   border: 1px solid ${p => p.theme.borderLight};
//   height: 1px;
//   width: 100%;
//   margin: 1.5rem 0;
// `;

const Content = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 124px;
  padding: 1rem;
`;
