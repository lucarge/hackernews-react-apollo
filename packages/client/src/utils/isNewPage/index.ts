import { matchPath, RouteComponentProps } from 'react-router'

export const isNewPage = (location: RouteComponentProps['location']) => matchPath(location.pathname, '/new/:page')

export default undefined
