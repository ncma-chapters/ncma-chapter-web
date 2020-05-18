// Node modules.
import styled from 'styled-components';
// Relative imports.
import Layout from '../../global/Layout';

export const StyledLayout = styled(Layout)`
  .event-details {
    h2 {
      color: #4c4a52;
      font-weight: 600;
      letter-spacing: -1px;
    }

    .row {
      align-items: flex-start;
      margin: 0;
    }

    .column {
      padding-left: 0;
    }

    h3 {
      color: #a16157;
      font-weight: 600;
      letter-spacing: -1px;
      line-height: 1.5;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .short-description {
      color: #000000;
      font-size: 1.1rem;
      line-height: 1.4;

      @media (max-width: 1000px) {
        margin: 0 0 20px;
      }
    }

    .starting-date {
      color: #000000;
      font-size: 1.3rem;
    }

    a {
      color: #d88661;
      text-decoration: underline;

      @media (max-width: 1000px) {
        margin: 20px 0 0;
      }
    }

    img {
      flex: unset;
      max-height: 250px;
      max-width: 100%;
    }
  }

  .description {
    color: #3d3d3d;
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 30px;
    max-width: 1040px;
    min-height: fit-content;
    padding: 50px 20px 0;
  }

  .line {
    max-width: 1000px;
  }

  .event-register {
    align-items: flex-start;
    max-width: 1040px;
    overflow: visible;
    padding: 40px 20px 0;

    h3 {
      color: #919197;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: -1px;
    }

    h4 {
      border-top: 1px dashed #cfd0da;
      font-size: 1.2rem;
      font-weight: 600;
      padding: 40px 0 0;
      margin: 40px 0 40px;
      width: 100%;

      &:first-of-type {
        border-top: none;
      }

      .required-def {
        color: #343434;
        font-size: 0.8rem;
        font-weight: 400;
        margin-left: 30px;

        @media (max-width: 1000px) {
          margin-left: 10px;
        }
      }

      &:last-of-type {
        margin: 40px 0 0;
      }
    }

    .required {
      color: #d75e3d;
    }

    .row {
      justify-content: flex-start;
      margin: 0;
      flex-flow: row wrap;

      label {
        align-items: center;
        cursor: pointer;
        display: flex;
        margin-right: 40px;

        &:last-of-type {
          margin-right: 0;
        }

        @media (max-width: 1000px) {
          margin-bottom: 10px;
        }

        input {
          margin-right: 10px;
        }
      }

      &.attendee-info {
        label {
          align-items: flex-start;
          cursor: default;
          color: #555555;
          flex-direction: column;
          font-weight: 300;
          margin: 0 50px 30px 0;
          min-width: 250px;

          input {
            border-radius: 3px;
            border: 1px solid #d8d8d8;
            margin-top: 5px;
            font-size: 1rem;
            padding: 8px 8px;
            overflow: visible;
            width: 100%;
          }
        }
      }
    }

    .summary-header {
      font-weight: bold;
      margin: 50px 0 10px;
    }

    .summary-value {
      margin: 10px 0;
      min-height: 16px;
    }

    .error {
    }

    button {
      background: #d88661;
      border-radius: 30px;
      color: #ffffff;
      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: -1px;
      margin: 50px 0 0;
      padding: 15px 50px;
    }

    form {
      margin: 10px 0;
      max-width: 400px;
      width: 100%;

      .total {
        background: #e8edf1;
        color: #282828;
        display: flex;
        font-size: 1.2rem;
        font-weight: bold;
        justify-content: space-between;
        margin: 70px 0 30px;
        min-width: 200px;
        padding: 25px 15px;
      }

      .tos {
        color: #282828;
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.5;

        a {
          color: #4c9ce5;
        }
      }

      button {
        margin: 70px 0 0;
      }
    }
  }

  .error {
    color: #d04747;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin: 20px 0 0;
  }

  .success {
    color: #3e843e;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    margin: 20px 0 0;
  }

  .events-banner-wrapper {
    align-items: center;
    background: #f9fcff;
    border-top: 1px solid #dcdcdc;
    display: flex;
    justify-content: center;
    margin: 180px 0 0;
    width: 100%;

    .events-banner {
      margin: 0;
      padding: 40px 20px;
      max-width: 1040px;
      width: 100%;

      .column {
        display: flex;
        flex-direction: column;

        &:last-of-type {
          align-items: flex-end;
        }

        h2 {
          border-bottom: 1px solid #cbcbcb;
          color: #605f66;
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: -1px;
          padding: 0 0 15px;
        }

        p {
          color: #464646;
          font-size: 1rem;
          font-weight: 300;
          line-height: 2;
          margin: 15px 0 0;
        }

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
      }
    }
  }
`;
