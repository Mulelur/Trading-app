import * as React from 'react';
import styled from 'styled-components/macro';
import { Input } from 'antd';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export function SearchComp() {
  return (
    <Wrapper>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 300px) {
    display: none;
  }
`;
