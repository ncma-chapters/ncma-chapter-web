// Node modules.
import React from 'react';
// Relative imports.
import config from '../../config';
import Layout from '../../global/Layout';
import LegalIframe from '../../primitives/LegalIframe';

const TermsOfService = () => (
  <Layout className="legal">
    <LegalIframe frameBorder="0" title="terms of service" src={config.termsOfServiceURL} />
  </Layout>
);

export default TermsOfService;
