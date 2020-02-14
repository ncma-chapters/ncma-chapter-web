// Dependencies.
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Bar = styled.div`
  align-items: center;
  background: rgba(10, 50, 84, 0.93);
  bottom: 0;
  display: flex;
  padding: 25px;
  position: absolute;
  width: 100%;
`;

export const BarTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8em;
  font-weight: bold;
`;

export const BarSubtitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5em;
  margin-left: 40px;
`;

export const StyledDate = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.shade};
  border: 1px solid ${({ theme }) => theme.colors.primary.shade};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: 2em;
  font-weight: bold;
  height: 200px;
  justify-content: center;
  max-width: 200px;
  text-align: center;
  transition: background 0.3s ease-out;
  width: 100%;
`;

export const Event = styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.colors.greys.tint2};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.greys.tint};
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  display: flex;
  margin: 0 0 100px;
  overflow: hidden;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(220, 233, 255, 0.48);
    cursor: pointer;
    transform: translateY(-5px) scale(1.005) translateZ(0);

    ${StyledDate} {
      background: ${({ theme }) => theme.colors.secondary.normal};
      border: 1px solid ${({ theme }) => theme.colors.secondary.normal};
    }
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1.8em;
  font-weight: bold;
  margin: 25px 0;
`;
