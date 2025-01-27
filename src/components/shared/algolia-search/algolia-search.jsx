'use client';

import { liteClient as algoliasearch } from 'algoliasearch/lite';
import PropTypes from 'prop-types';
import { InstantSearch } from 'react-instantsearch';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

const AlgoliaSearch = ({ indexName, children }) => (
  <InstantSearch indexName={indexName} searchClient={searchClient}>
    {children}
  </InstantSearch>
);

AlgoliaSearch.propTypes = {
  indexName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AlgoliaSearch;
