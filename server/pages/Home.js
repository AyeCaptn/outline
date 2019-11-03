// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import breakpoint from 'styled-components-breakpoint';
import AuthErrors from './components/AuthErrors';
import Hero from './components/Hero';
import SigninButtons from './components/SigninButtons';

type Props = {
  notice?: 'google-hd' | 'auth-error' | 'hd-not-allowed',
  lastSignedIn: string,
  googleSigninEnabled: boolean,
  slackSigninEnabled: boolean,
};

function Home(props: Props) {
  return (
    <span>
      <Helmet>
        <title>CloudBuilder - Team wiki & knowledge base</title>
      </Helmet>
      <Grid>
        <Hero id="signin">
          <h1>CloudBuilder knowledge base</h1>
          <p>
            <SigninButtons {...props} />
          </p>
          <AuthErrors notice={props.notice} />
        </Hero>
      </Grid>
    </span>
  );
}

const Screenshot = styled.img`
  width: 100%;
  box-shadow: 0 0 80px 0 rgba(124, 124, 124, 0.5),
    0 0 10px 0 rgba(237, 237, 237, 0.5);
  border-radius: 5px;

  ${breakpoint('desktop')`
    margin-top: -120px;
    margin-left: 120px;
    width: 135%;
  `};
`;

const Mask = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 8em 0;
`;

const Features = styled.div`
  background: #00adff;
  padding: 0 2em;
  width: 100%;
`;

const Feature = styled(Grid.Unit)`
  padding: 2em 0;

  p {
    font-weight: 500;
    opacity: 0.8;
  }

  h2 {
    display: flex;
    font-size: 1.8em;
    align-items: center;
    margin-top: 0;
  }

  a {
    color: ${props => props.theme.black};
    text-decoration: underline;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
  }

  ${breakpoint('tablet')`
    padding: 4em 0;
  `};
`;

const Footer = styled.div`
  background: #aa34f0;
  text-align: left;
  width: 100%;
  padding: 4em 2em;

  h2 {
    font-size: 1.8em;
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }

  ${breakpoint('tablet')`
    margin: 2em 0;
    padding: 6em 4em;
  `};
`;

export default Home;
