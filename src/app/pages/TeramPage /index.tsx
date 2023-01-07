import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

import { NavBar } from 'app/components/NavBar';

export function PrivatePolicyPage() {
  return (
    <>
      <Helmet>
        <title>PrivatePolicy</title>
        <meta
          name="PrivatePolicy"
          content="Edit your profile and change your password."
        />
      </Helmet>
      <NavBar />
    </>
  );
}
