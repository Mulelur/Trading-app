import styled from 'styled-components/macro';

export const Input = styled.input`
  font-weight: normal;
  margin: 0;
  padding: 0;
  color: ${p => p.theme.primary};
  font-size: 1.05rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid ${p => p.theme.border};
  background-color: ${p => p.theme.background};
  border-radius: 0.45rem;
  width: 100%;
  height: 2.6rem;

  box-shadow:0px 1px 3px 0px rgba(0,0,0,0.1) , 0px 1px 2px 0px rgba(0,0,0,0.06) 

  &:focus {
    outline: none;
    color: ${p => p.theme.primary};
    border: 1px solid ${p => p.theme.primary};
  }
`;
