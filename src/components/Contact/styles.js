// Dependencies.
import styled from 'styled-components';
import { Link } from 'gatsby';

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h4`
  font-size: 1.4em;
  font-weight: bold;
  margin: 0 0 10px;
`;

export const ContactForm = styled.div`
  background: ${({ theme }) => theme.colors.greys.tint2};
  border: 1px solid ${({ theme }) => theme.colors.greys.tint};
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greys.tint};
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1em;
  flex-grow: 1;
  margin: 0 0 10px;
  padding: 10px;
`;

export const Textarea = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greys.tint};
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 1em;
  margin: 0 0 10px;
  padding: 5px 10px;
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary.normal};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2em;
  margin: 0 0 20px;
  padding: 15px 20px;
  text-align: center;
  width: 100%;
`;

export const Acknowledgement = styled.p`
  color: ${({ theme }) => theme.colors.greys.shade};
  font-size: 0.8em;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.greys.shade};
  text-decoration: underline;
`;
