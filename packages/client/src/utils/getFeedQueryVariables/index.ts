import { Location } from 'history'
import { match } from 'react-router' // eslint-disable-line @typescript-eslint/no-unused-vars
import { FeedQueryVariables, LinkOrderByInput } from 'types'
import { isNewPage } from 'utils/isNewPage'
import { getPageIndex } from 'utils/getPageIndex'

export const getFeedQueryVariables = (location: Location, match: match<{ page: string }>): FeedQueryVariables => {
  const skip = getPageIndex(location, match)

  if (isNewPage(location)) {
    return {
      skip,
      first: 5,
      orderBy: LinkOrderByInput.createdAt_DESC,
    }
  }

  return {
    skip,
    first: 100,
    orderBy: null,
  }
}

export default undefined
