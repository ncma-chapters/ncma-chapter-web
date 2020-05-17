// Node modules.
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
  ${reset};

  body {
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    font-family: 'Proxima Nova', 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  strong {
    font-weight: bold;
  }

  button {
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
`;
