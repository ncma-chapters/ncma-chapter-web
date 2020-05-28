// Node modules.
import { graphql } from 'gatsby';
// Relative imports.
import Events from '../components/Events';

export const query = graphql`
  query EventsQuery {
    allEvents {
      nodes {
        capacity
        description
        fake
        id
        name
        startingAt
      }
    }
  }
`;

export default Events;
