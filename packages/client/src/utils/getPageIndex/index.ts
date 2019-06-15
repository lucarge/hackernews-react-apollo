import { Location } from 'history'
import { match } from 'react-router' // eslint-disable-line @typescript-eslint/no-unused-vars
import { isNewPage } from 'utils/isNewPage'

export const getPageIndex = (location: Location, match: match<{ page: string }>) => {
  if (!match.params.page) {
    return 0
  }

  const page = parseInt(match.params.page, 10)

  if (isNaN(page)) {
    return 0
  }

  if (isNewPage(location)) {
    return (page - 1) * 5
  }

  return 0
}

export default undefined
