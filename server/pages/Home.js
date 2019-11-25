// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
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
          <AuthErrors notice={props.notice} />
          <h1>CloudBuilder knowledge base</h1>
          <p>
            <SigninButtons {...props} />
          </p>
          <p>Powered by Outline</p>
        </Hero>
      </Grid>
    </span>
  );
}

const Logo = styled.img`
  height: 60px;
  border-radius: 4px;
`;

export default Home;
