import { SideBar } from 'app/components/SideBar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Dashboard } from './Dashboard/Loadable';
import { selectNav } from './slice/selectors';
import { NavBar } from 'app/components/NavBar';
import Swipeable from 'app/components/Swipeable';
import { useSelector } from 'react-redux';

// Components Views

import { Settings } from './Settings';
import { Transactions } from './Transactions';
import { Reports } from './Reports';
import { Withdrawal } from './Withdrawal';

export function ProjectPage() {
  const { section } = useSelector(selectNav);

  console.log(section);

  const renderMain = (type: string) => {
    let el: React.ReactNode;
    switch (type) {
      case 'profile':
        el = <Settings />;
        break;
      case 'transactions':
        el = <Transactions />;
        break;
      case 'reports':
        el = <Reports />;
        break;
      case 'withdrawal':
        el = <Withdrawal />;
        break;

      default:
        el = <Dashboard />;
        break;
    }
    return el;
  };

  return (
    <>
      <Helmet>
        <title>Sing-In</title>
        <meta name="Sign-in" content="Sign in to the web porfirio dashboard." />
      </Helmet>
      <Container>
        <Content>
          <NavBar />
          <SideBar />
          <Swipeable />
          <Main>
            <MainView>{renderMain(section)}</MainView>
          </Main>
        </Content>
      </Container>
    </>
  );
}

export const Container = styled.div`
  background-color: ${p => p.theme.background};
  color: rgb(18, 22, 30);
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  padding-left: 252px;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  flex-grow: 1;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Main = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  will-change: opacity;

  width: 100%;
  align-items: center;

  // @media only screen and (max-width: 600px) {
  //   padding: 1.1rem 12rem;
  // }

  // Small devices (portrait tablets and large phones, 600px and up)
  @media only screen and (min-width: 600px) {
    padding: 1.8rem 4rem;
  }
`;

const MainView = styled.div`
  padding: 2rem;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding: 0.3rem;
  }

  // Small devices (portrait tablets and large phones, 600px and up)
  @media only screen and (min-width: 600px) {
    padding: 1rem;
  }
`;
