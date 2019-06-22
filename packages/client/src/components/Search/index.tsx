import React, { useState } from 'react'
import { useQuery } from 'urql'
import { FEED_SEARCH_QUERY } from 'api/queries/feed/search'
import { Link } from 'components/Link'
import { FeedSearchQuery, FeedSearchQueryVariables } from 'types'

export const Search = () => {
  const [filter, setFilter] = useState('')
  const [result, searchLinks] = useQuery<FeedSearchQuery, FeedSearchQueryVariables>({
    pause: !filter,
    query: FEED_SEARCH_QUERY,
    variables: { filter },
  })

  return (
    <div>
      <div>
        Search
        <input type="text" onChange={e => setFilter(e.target.value)} />
        <button onClick={searchLinks}>OK</button>
      </div>

      {result.fetching && <p>loading...</p>}
      {result.error && <p>failed to search links</p>}

      {result.data && result.data.feed.links.map((link, index) => <Link key={link.id} link={link} index={index} />)}
    </div>
  )
}

export default undefined
