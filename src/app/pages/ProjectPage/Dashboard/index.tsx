import * as React from 'react';

import { H1 } from 'app/components/common/typography/H1';
import styled from 'styled-components/macro';
import { P } from '../components/P';

import { Card as ICard, Select, Row as IRow } from 'antd';

import { PageContainer } from 'app/components/common/layout/PageContainer';
import StaticBar from './components/Static';
import BasicTable from 'app/components/Tables/BasicTable';
import StockPlot from 'app/components/charts/StockChart/s';

export function Dashboard() {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const style = { gap: '2.1rem', alignItems: 'center' };

  return (
    <PageContainer>
      <Content>
        <H1>Get started, Rotonda!</H1>
        <P>Data virtualization dashboard</P>
        <h2>Accounts</h2>
        <Column>
          <StaticBar />
        </Column>
        <div>
          <IRow style={style}>
            <H1>AAPL</H1>
            <Column>
              <Select
                labelInValue
                showSearch
                defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
                style={{ width: 120 }}
                onChange={handleChange}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  {
                    value: 'jack',
                    label: 'Jack (100)',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy (101)',
                  },
                ]}
              />
            </Column>
          </IRow>
        </div>
        <P>Market Prices</P>
        <Column style={{ paddingTop: '1rem' }}>
          <ICard>
            <StockPlot />
          </ICard>
        </Column>
        <H1>Recent Orders</H1>
        <P> place and cancel your end user order requests</P>
        <Column style={{ paddingTop: '1rem' }}>
          <BasicTable />
        </Column>
      </Content>
    </PageContainer>
  );
}

const Content = styled.div`
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
