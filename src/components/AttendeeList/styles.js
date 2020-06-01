// Node modules.
import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #3d3d3d;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  max-width: 1040px;
  min-height: 200px;
  padding: 30px 20px 20px;
  width: 100%;

  button {
    color: #d88661;
    text-decoration: underline;

    &[type='submit'] {
      align-items: center;
      background: #d88661;
      border-radius: 30px;
      color: #ffffff;
      display: flex;
      font-size: 1.3rem;
      font-weight: 500;
      justify-content: center;
      letter-spacing: -1px;
      min-height: 51px;
      min-width: 188px;
      padding: 10px 30px;
      text-align: center;
      text-decoration: none;
    }
  }

  label {
    align-items: flex-start;
    cursor: default;
    color: #555555;
    flex-direction: column;
    display: flex;
    font-weight: 300;
    margin: 0 0 20px;
    min-width: 250px;

    input {
      border-radius: 3px;
      border: 1px solid #d8d8d8;
      margin-top: 5px;
      font-size: 1rem;
      padding: 8px 8px;
      overflow: visible;
      max-width: 250px;
      width: 100%;
    }
  }

  .required {
    color: #d75e3d;
  }

  .back {
    margin-bottom: 20px;
  }

  .error {
    color: #d04747;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin: 20px 0 0;
    min-height: 24px;
  }

  table {
    th,
    td {
      border-bottom: 1px solid #efefef;
      border-right: 1px solid #efefef;
      padding: 10px;
      text-align: center;

      &:last-of-type {
        border-right: none;
      }
    }

    th {
      font-weight: 500;
    }

    td {
      font-size: 1rem;
    }
  }
`;
