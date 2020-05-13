// Node modules.
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

export const flyDown = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.shade};
  display: flex;
  flex-grow: 1;
  justify-content: center;
  transition: all 0.3s ease;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  max-width: 900px;
  padding: 2rem;

  @media (max-width: 1000px) {
    padding: 1rem;
    justify-content: space-between;
    width: 100%;
  }
`;

export const MobileItems = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.shade};
  box-sizing: border-box;
  display: none;
  flex-direction: column;
  padding: 10px 20px 40px;
  text-align: center;
  width: 100%;

  @media (max-width: 1000px) {
    display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  }
`;

export const Items = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 2rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Item = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1.5rem;
  text-decoration: none;
  text-shadow: ${({ selected }) => (selected ? '0.5px 0px 0.5px, -0.5px 0px 0.5px' : 'none')};
  white-space: nowrap;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    margin: 0 0 30px;
  }
`;

export const CallToAction = styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.greys.shade};
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  font-weight: 500;
  justify-content: center;
  min-height: 30px;
  min-width: 100px;
`;
