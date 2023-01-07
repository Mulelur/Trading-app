import * as React from 'react';
import styled from 'styled-components/macro';
import { Form } from 'app/pages/Auth/SignInPage/SignInForm';
import { P } from 'app/pages/NotFoundPage/P';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import FormCreate from './components/Form';

export default function CreateTemplate() {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  // const octokit = new Octokit({
  //   auth: 'personal-access-token123'
  // })

  // await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
  //   owner: 'OWNER',
  //   repo: 'REPO',
  //   ref: 'refs/heads/featureA',
  //   sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd'
  // })

  return (
    <>
      <Wrapper>
        <Container>
          <Content>
            <FormCreate />
            <P>let's create your new website. start by a template</P>
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
