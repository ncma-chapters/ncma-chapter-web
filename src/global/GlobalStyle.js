// Node modules.
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};

  body {
    background: ${({ theme }) => theme.background};
    font-family: 'Proxima Nova', 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-weight: 500;
    font-size: 16px;
  }
`;
