/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Feed
// ====================================================

export interface Feed_feed_links_postedBy {
  __typename: 'User'
  id: string
  name: string
}

export interface Feed_feed_links_votes_user {
  __typename: 'User'
  id: string
}

export interface Feed_feed_links_votes {
  __typename: 'Vote'
  id: string
  user: Feed_feed_links_votes_user
}

export interface Feed_feed_links {
  __typename: 'Link'
  id: string
  createdAt: any
  url: string
  description: string
  postedBy: Feed_feed_links_postedBy | null
  votes: Feed_feed_links_votes[]
}

export interface Feed_feed {
  __typename: 'Feed'
  links: Feed_feed_links[]
}

export interface Feed {
  feed: Feed_feed
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
