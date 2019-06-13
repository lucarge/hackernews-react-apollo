import React, { useCallback, useState } from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import { FEED_SEARCH_QUERY } from 'api/queries/feed/search'
import { Link } from 'components/Link'
import { FeedSearchQuery, FeedSearchQueryVariables, FeedSearchQuery_feed_links } from 'types'

const SearchComponent = ({ client }: WithApolloClient<{}>) => {
  const [filter, setFilter] = useState('')
  const [links, setLinks] = useState<FeedSearchQuery_feed_links[]>([])

  const handleSearch = useCallback(async () => {
    const result = await client.query<FeedSearchQuery, FeedSearchQueryVariables>({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    })

    setLinks(result.data.feed.links)
  }, [client, filter, setLinks])

  return (
    <div>
      <div>
        Search
        <input type="text" onChange={e => setFilter(e.target.value)} />
        <button onClick={handleSearch}>OK</button>
      </div>
      {links.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  )
}

export const Search = withApollo(SearchComponent)

export default undefined
