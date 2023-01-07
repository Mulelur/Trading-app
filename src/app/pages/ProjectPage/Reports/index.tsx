import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';

import { P } from 'app/components/common/typography/P/P';
import { PageContainer } from 'app/components/common/layout/PageContainer';
import { Col, Row } from 'antd';

import AjaxTable from 'app/components/Tables/AjaxTable';
import { FileTextOutlined } from '@ant-design/icons';
import { themes } from 'styles/theme/themes';

export function Reports() {
  return (
    <PageContainer>
      <Content>
        <Row
          style={{
            alignItems: 'center',
          }}
        >
          <H1 style={{ paddingRight: '1rem' }}>Reports</H1>
          <FileTextOutlined
            style={{ fontSize: '24px', color: themes.light.textSecondary }}
          />
        </Row>
        <P>List of all your Reports!</P>
        <Col>
          <AjaxTable />
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
