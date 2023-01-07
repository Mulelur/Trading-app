import * as React from 'react';
import styled from 'styled-components/macro';
import { H1 } from 'app/components/common/typography/H1';
import { ReactComponent as SuccessIcon } from './assets/Success-icon.svg';
import { Column } from 'app/components/common/layout/Column';
import { P } from 'app/pages/NotFoundPage/P';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export default function SuccessStep() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <Wrapper>
        <Container>
          <Content>
            <Column>
              <SuccessIcon />
            </Column>
            <H1>Select a template</H1>
            <P>let's create your new website. start by a template</P>
            <Checkbox onChange={onChange}>customer Agreement</Checkbox>;
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
