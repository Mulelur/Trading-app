import * as React from 'react';

import { P } from 'app/pages/NotFoundPage/P';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { StolenButton } from '../common/buttons/stolen';

export function Upgrade() {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <P>Upgrade Your Plan Now</P>
        <ButtonWarper>
          <StolenButton onClick={() => navigate('/pricing')}>
            Upgrade
          </StolenButton>
        </ButtonWarper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 2rem;
`;

const Content = styled.div`
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonWarper = styled.div``;
