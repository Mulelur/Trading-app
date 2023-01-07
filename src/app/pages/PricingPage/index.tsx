import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { H1 } from 'app/components/common/typography/H1';
import { P } from '../NotFoundPage/P';
import { PricingCard } from './PricingCard';
import { NavBar } from 'app/components/NavBar';
import { Row } from 'antd';

const pricing = [
  {
    title: 'Guardian',
    subTitle: "What You'll Get",
    benefits: ['lorem lepsum', 'lorem lepsum ol rome'],
    price: 'Free Forever',
    interval: '',
  },
  {
    title: 'Founder',
    subTitle: "What You'll Get",
    benefits: ['View Transaction', 'Invoicing', 'Reports'],
    price: '$ 10.95',
    interval: '/monthly',
  },
  {
    title: 'Premium',
    subTitle: "What You'll Get",
    benefits: ['View Transaction', 'Invoicing', 'Reports', 'Analytics'],
    price: '$ 25.95',
    interval: '/monthly',
  },
];

export function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
        <meta
          name="Pricing"
          content="Whether you're using Weblinnk as a student ot individual, there's a plan for you."
        />
      </Helmet>
      <NavBar />
      <Wrapper>
        <H1>Get The Right Plan For You</H1>
        <P>All plans including 14-days free trial from us</P>
        <Row>
          {pricing.map(item => {
            return <PricingCard price={item} />;
          })}
        </Row>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // min-height: 320px;
`;
