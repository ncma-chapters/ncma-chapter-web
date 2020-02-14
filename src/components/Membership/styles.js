// Dependencies.
import styled from 'styled-components';

export const Benefit = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 100px;
  width: 100%;
`;

export const BenefitTitle = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greys.tint};
  color: ${({ theme }) => theme.colors.secondary.shade};
  font-size: 1.6em;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 20px;
  width: 100%;
`;

export const StyledLink = styled.a`
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-size: 1em;
  margin: 0 0 0 20px;
  text-decoration: underline;
  white-space: nowrap;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.greys.tint2};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.greys.tint};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  max-width: 230px;
  min-height: 360px;
  min-width: 230px;
  padding: 20px 15px 50px;
  text-align: center;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 0 20px;
`;

export const CardDescription = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.greys.tint};
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 0.8em;
  line-height: 20px;
  padding: 0 0 20px;
  min-height: 100px;
`;

export const CardCost = styled.p`
  color: ${({ theme }) => theme.colors.secondary.shade};
  font-size: 1.2em;
  margin: 40px 0 10px;
`;

export const CardCostLabel = styled.p`
  color: ${({ theme }) => theme.colors.secondary.shade};
  font-size: 1em;
  margin: 0 0 50px;
`;

export const InitiationFee = styled.p`
  color: ${({ theme }) => theme.colors.greys.normal};
  font-size: 0.8em;
`;
