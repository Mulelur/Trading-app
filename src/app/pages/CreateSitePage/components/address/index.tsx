import * as React from 'react';
import styled from 'styled-components/macro';
import { H1 } from 'app/components/common/typography/H1';
import { ReactComponent as FormIcon } from './assets/Form-icon.svg';

import { Column } from 'app/components/common/layout/Column';

import { P } from 'app/pages/NotFoundPage/P';
import AddressForm from './components/Form';

export default function Address() {
  return (
    <>
      <Wrapper>
        <Container>
          <Content>
            <P>
              let's create your new website. start by entering your new site
              name
            </P>
            <AddressForm />
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 780px;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: none;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;
  background-color: transparent;
  color: ${p => p.theme.primary};
`;
