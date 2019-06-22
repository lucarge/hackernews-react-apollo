import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router'
import { useQuery } from 'urql'
import { FEED_QUERY } from 'api/queries/feed'
import { Link } from 'components/Link'
import { FeedQuery, FeedQueryVariables } from 'types'
import { isNewPage } from 'utils/isNewPage'
import { getPageIndex } from 'utils/getPageIndex'
import { getFeedQueryVariables } from 'utils/getFeedQueryVariables'

export const LinkList = ({ history, location, match }: RouteComponentProps<{ page: string }>) => {
  const [result] = useQuery<FeedQuery, FeedQueryVariables>({
    query: FEED_QUERY,
    variables: getFeedQueryVariables(location, match),
  })

  const goBack = useCallback(() => {
    const page = parseInt(match.params.page, 10)

    if (isNaN(page) || page <= 1) {
      return
    }

    history.push(`/new/${page - 1}`)
  }, [history, match.params.page])

  const goForward = useCallback(() => {
    const page = parseInt(match.params.page, 10)

    if (isNaN(page) || page > result.data!.feed.count / 5) {
      return
    }

    history.push(`/new/${page + 1}`)
  }, [history, match.params.page, result.data])

  if (result.fetching) {
    return <div>Loading</div>
  }

  if (result.error) {
    return <div>Unable to retrieve posts</div>
  }

  if (!result.data) {
    return null
  }

  const linksToRender = isNewPage(location)
    ? result.data.feed.links
    : result.data.feed.links.slice().sort((l1, l2) => l2.votes.length - l1.votes.length)

  const pageIndex = getPageIndex(location, match)

  return (
    <>
      {linksToRender.map((link, index) => (
        <Link key={link.id} link={link} index={index + pageIndex} />
      ))}

      {isNewPage(location) && (
        <div className="flex ml4 mv3 gray">
          <div className="pointer mr2" onClick={goBack}>
            Previous
          </div>
          <div className="pointer" onClick={goForward}>
            Next
          </div>
        </div>
      )}
    </>
  )
}

export default undefined
