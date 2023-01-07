import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';

import { P } from 'app/components/common/typography/P/P';
import { PageContainer } from 'app/components/common/layout/PageContainer';
import { Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { Button, Dropdown, Space } from 'antd';
import SettingsForm from './components/SettingsForm';
import { H4 } from 'app/components/common/typography/H4';

export function Settings() {
  return (
    <PageContainer>
      <Content>
        <H1>Site Settings</H1>
        <P>Set Your Site Settings here!</P>
        <H4>Your Profile photo</H4>
        <Row gutter={24}>
          <Col span={24}>
            <Row>
              <Col>
                <Avatar
                  size={124}
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
              </Col>

              <ButtonContainer>
                <Button size="large" type="primary">
                  change Photo
                </Button>
                <Button size="large">Delete Photo</Button>
              </ButtonContainer>
            </Row>
            <P>My Profile pic</P>
          </Col>
        </Row>
        <Col>
          <SettingsForm />
        </Col>
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
