// Node modules.
import { graphql } from 'gatsby';
// Relative imports.
import Events from '../components/Events';

export const query = graphql`
  query EventsQuery {
    allEvents {
      edges {
        node {
          id
          capacity
          description
          startingAt
          name
        }
      }
    }
  }
`;

export default Events;
