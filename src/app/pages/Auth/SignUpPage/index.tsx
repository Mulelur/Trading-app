import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { PageWrapper } from 'app/components/PageWrapper';
import { SignUpForm } from './SignUpForm';
import { NavBar } from 'app/components/NavBar';

export function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta
          name="New way for creating quick web porfirio in your browser."
          content="Sign in page"
        />
      </Helmet>
      <NavBar logo={true} menu={false} />
      <PageWrapper>
        <SignUpForm />
      </PageWrapper>
    </>
  );
}
