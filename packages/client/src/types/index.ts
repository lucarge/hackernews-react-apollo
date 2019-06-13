/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login {
  __typename: 'AuthPayload'
  token: string | null
}

export interface LoginMutation {
  login: LoginMutation_login | null
}

export interface LoginMutationVariables {
  email: string
  password: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PostMutation
// ====================================================

export interface PostMutation_post {
  __typename: 'Link'
  id: string
  createdAt: any
  url: string
  description: string
}

export interface PostMutation {
  post: PostMutation_post
}

export interface PostMutationVariables {
  description: string
  url: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignupMutation
// ====================================================

export interface SignupMutation_signup {
  __typename: 'AuthPayload'
  token: string | null
}

export interface SignupMutation {
  signup: SignupMutation_signup | null
}

export interface SignupMutationVariables {
  email: string
  password: string
  name: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VoteMutation
// ====================================================

export interface VoteMutation_vote_link_votes_user {
  __typename: 'User'
  id: string
}

export interface VoteMutation_vote_link_votes {
  __typename: 'Vote'
  id: string
  user: VoteMutation_vote_link_votes_user
}

export interface VoteMutation_vote_link {
  __typename: 'Link'
  votes: VoteMutation_vote_link_votes[]
}

export interface VoteMutation_vote_user {
  __typename: 'User'
  id: string
}

export interface VoteMutation_vote {
  __typename: 'Vote'
  id: string
  link: VoteMutation_vote_link
  user: VoteMutation_vote_user
}

export interface VoteMutation {
  vote: VoteMutation_vote
}

export interface VoteMutationVariables {
  linkId: string
}

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

// ====================================================
// GraphQL query operation: FeedSearchQuery
// ====================================================

export interface FeedSearchQuery_feed_links_postedBy {
  __typename: 'User'
  id: string
  name: string
}

export interface FeedSearchQuery_feed_links_votes_user {
  __typename: 'User'
  id: string
}

export interface FeedSearchQuery_feed_links_votes {
  __typename: 'Vote'
  id: string
  user: FeedSearchQuery_feed_links_votes_user
}

export interface FeedSearchQuery_feed_links {
  __typename: 'Link'
  id: string
  url: string
  description: string
  createdAt: any
  postedBy: FeedSearchQuery_feed_links_postedBy | null
  votes: FeedSearchQuery_feed_links_votes[]
}

export interface FeedSearchQuery_feed {
  __typename: 'Feed'
  links: FeedSearchQuery_feed_links[]
}

export interface FeedSearchQuery {
  feed: FeedSearchQuery_feed
}

export interface FeedSearchQueryVariables {
  filter: string
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
