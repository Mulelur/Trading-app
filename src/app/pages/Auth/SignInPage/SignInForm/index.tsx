import * as React from 'react';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { Input } from 'app/components/common/feedback/Input';
import { Label } from 'app/components/common/feedback/Label';
import { H1 } from 'app/components/common/typography/H1';
import { H4 } from 'app/components/common/typography/H4';
import { P } from 'app/components/common/typography/P/P';
import { Link } from 'app/components/Link';
import styled from 'styled-components/macro';

import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Row } from 'app/components/common/layout/Row';
import { Checkbox, FormControlLabel } from '@mui/material';
import getUser from 'helpers/users/getUser';
import User from 'graphql/query/usersPermissionsUser';
import UsersPermissionsLoginInput from 'graphql/mutation/login';

const CREATE_USER = gql`
  mutation ($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        confirmed
        blocked
        username
      }
    }
  }
`;

type RequestData = {
  password: HTMLInputElement | null;
  identifier: HTMLInputElement | null;
};

const handleChange = () => {
  console.log('hello');
};

export function SignInForm() {
  const navigate = useNavigate();
  const [logIn, { data: D, loading: L, error: E }] = useMutation(CREATE_USER);

  // save jwt to local storage
  if (D) {
    localStorage.setItem('jwt', D.login.jwt);

    console.log(D.login.user.id);

    const usersPermissionsUser = User(D.login.user.id); // <===

    console.log(usersPermissionsUser);

    const user = getUser(D.login.user.id);

    console.log(user);

    navigate('/');
  }

  if (L) return <>'Loading...'</>;
  if (E) return <>`Error! ${E.message}`</>;

  let reqData: RequestData = {
    password: null,
    identifier: null,
  };

  const createTemplateHandler = () => {
    logIn({
      variables: {
        input: {
          password: reqData.password?.value,
          identifier: reqData.identifier?.value,
        },
      },
    });

    if (reqData) {
      const {data, error} = UsersPermissionsLoginInput(
        reqData.password?.value,
        reqData.identifier?.value,
      );
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    createTemplateHandler();

    reqData = {
      password: null,
      identifier: null,
    };
  };

  return (
    <>
      <Wrapper>
        <Content>
          <H1>Sign In</H1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                ref={node => {
                  reqData.identifier = node;
                }}
                autoComplete="email"
                type="email"
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                ref={node => {
                  reqData.password = node;
                }}
                autoComplete="current-password"
                type="password"
                placeholder="Enter your password"
              />
            </FormGroup>
            <FormGroup>
              <Row style={{ alignItems: 'end' }}>
                <FormGroup>
                  <H4>Keep me log in</H4>
                </FormGroup>
                <FormGroup style={{ alignItems: 'end' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={handleChange}
                        name=""
                      />
                    }
                    label=""
                  />
                </FormGroup>
              </Row>
            </FormGroup>
            <FormGroup>
              <PrimaryButton>Sign In</PrimaryButton>
            </FormGroup>
          </Form>
          <P>
            Don't have an account?{' '}
            <Link to={process.env.PUBLIC_URL + '/signup'}>Sign Up</Link>
          </P>
        </Content>
        <P>
          <TextCenter>
            By clicking “Continue with Google/Email” above, you acknowledge
            that you have read and understood, and agree to weblinnk's{' '}
            <Link to="">Terms and Conditions</Link> and{' '}
            <Link to="">Privacy Policy</Link> .
          </TextCenter>
        </P>
      </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 22rem;
  min-width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextCenter = styled.div`
  text-align: center;
  max-width: 35rem;
  margin-top: 3rem;
`;
export const Form = styled.form`
  width: 100%;
  padding-bottom: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  // &:not(:first-child) {
  //   padding-top: 0.8rem;
  // }
`;
