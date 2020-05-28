// Node modules.
import { graphql } from 'gatsby';
// Relative imports.
import Events from '../components/Events';

export const query = graphql`
  query EventsQuery {
    allEvents {
      nodes {
        id
        capacity
        description
        fake
        startingAt
        name
      }
    }
  }
`;

export default Events;
