// Node modules.
import styled from 'styled-components';
// Relative imports.
import Layout from '../../global/Layout';

export const StyledLayout = styled(Layout)`
  margin: 0 0 100px;

  a {
    background: #d88661;
    border-radius: 30px;
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: -1px;
    padding: 15px 35px;
    white-space: nowrap;

    @media (max-width: 1000px) {
      margin-top: 30px;
    }
  }
`;
