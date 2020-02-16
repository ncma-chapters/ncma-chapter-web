import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 30px;
  background: rebeccapurple;
  border-radius: 6px;
  color: white;

  ${({ largeScreenStyles }) => largeScreenStyles || ''}

  @media (max-width: 1000px) {
    ${({ smallScreenStyles }) => smallScreenStyles || ''}
  }
`;

export default Button;
