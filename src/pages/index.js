// Node modules.
import React from 'react';
import styled from 'styled-components';
// Other imports.
import Layout from 'src/global/Layout';

const LandingPage = () => (
  <Layout>
    <Page>
      <h1>NCMA Chapter</h1>
    </Page>
  </Layout>
);

const Page = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 24px;
    color: #555;
    margin-top: 60px;
  }
`;

export default LandingPage;
