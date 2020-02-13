// Dependencies.
import styled from 'styled-components';

export default styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 325px;
  position: relative;
  width: 100%;
`;
