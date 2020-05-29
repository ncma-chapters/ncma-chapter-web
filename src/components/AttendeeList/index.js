// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';
import get from 'lodash/get';
import join from 'lodash/join';
import map from 'lodash/map';
// Relative imports.
import Spinner from '../../primitives/Spinner';
import { Wrapper } from './styles';
import { fetchEventRegistrations } from './api';

const VIEW_BUTTON = 'VIEW_BUTTON';
const VIEW_PASSCODE = 'VIEW_PASSCODE';
const VIEW_LIST = 'VIEW_LIST';

class AttendeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      eventRegistrations: [],
      fetching: false,
      passcode: '',
      showComponent: VIEW_BUTTON,
    };
  }

  onBackClick = () => {
    this.setState({
      error: '',
      eventRegistrations: [],
      passcode: '',
      showComponent: VIEW_BUTTON,
    });
  };

  onPasscodeChange = (event) => {
    this.setState({ passcode: event.target.value });
  };

  onViewButtonClick = () => {
    this.setState({ showComponent: VIEW_PASSCODE });
  };

  onPasscodeSubmit = async (event) => {
    event.preventDefault();

    this.setState({ error: '', fetching: true });

    try {
      const response = await fetchEventRegistrations(this.props.eventID, this.state.passcode);
      this.setState({ eventRegistrations: get(response, 'data.data'), fetching: false, showComponent: VIEW_LIST });
    } catch (error) {
      this.setState({ error: error.message, fetching: false });
    }
  };

  render() {
    const { onBackClick, onPasscodeChange, onPasscodeSubmit, onViewButtonClick } = this;
    const { error, eventRegistrations, fetching, showComponent, passcode } = this.state;

    if (showComponent === VIEW_LIST) {
      return (
        <Wrapper>
          <button className="back" onClick={onBackClick} type="button">
            Back
          </button>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Ticket</th>
              </tr>
            </thead>
            <tbody>
              {map(eventRegistrations, (registration) => {
                // Derive registration properties.
                const company = get(registration, 'attributes.company');
                const email = get(registration, 'attributes.email', 'Not provided');
                const firstName = get(registration, 'attributes.firstName');
                const id = get(registration, 'id');
                const lastName = get(registration, 'attributes.lastName');
                // const ticketClassID = get(registration, 'attributes.ticketClassId');
                const title = get(registration, 'attributes.title');

                // Derive ticket class properties.
                const ticketName = get(registration, 'attributes.name');
                const ticketPrice = get(registration, 'attributes.price.display');

                // Derive composed fields.
                const fullName = join(filter(firstName, lastName), ' ') || 'Not provided';
                const companyAndTitle = join(filter(company, title), ', ') || 'Not provided';
                const ticketDisplay = ticketName && ticketPrice ? `${ticketName} (${ticketPrice})` : 'Not provided';

                return (
                  <tr key={id}>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{companyAndTitle}</td>
                    <td>{ticketDisplay}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Wrapper>
      );
    }

    if (showComponent === VIEW_PASSCODE) {
      return (
        <Wrapper>
          <button className="back" onClick={onBackClick} type="button">
            Back
          </button>
          <form onSubmit={onPasscodeSubmit}>
            <label htmlFor="passcode">
              <span>
                Passcode <span className="required">*</span>
              </span>
              <input name="passcode" type="password" onChange={onPasscodeChange} value={passcode} />
            </label>
            <button type="submit">{fetching ? <Spinner /> : 'VIEW'}</button>
            <p className="error">{error}</p>
          </form>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <button onClick={onViewButtonClick} type="button">
          View the attendee list
        </button>
      </Wrapper>
    );
  }
}

AttendeeList.propTypes = {
  eventID: PropTypes.string.isRequired,
};

export default AttendeeList;
