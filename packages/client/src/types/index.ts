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
// GraphQL query operation: FeedQuery
// ====================================================

export interface FeedQuery_feed_links_postedBy {
  __typename: 'User'
  id: string
  name: string
}

export interface FeedQuery_feed_links_votes_user {
  __typename: 'User'
  id: string
}

export interface FeedQuery_feed_links_votes {
  __typename: 'Vote'
  id: string
  user: FeedQuery_feed_links_votes_user
}

export interface FeedQuery_feed_links {
  __typename: 'Link'
  id: string
  createdAt: any
  url: string
  description: string
  postedBy: FeedQuery_feed_links_postedBy | null
  votes: FeedQuery_feed_links_votes[]
}

export interface FeedQuery_feed {
  __typename: 'Feed'
  links: FeedQuery_feed_links[]
  count: number
}

export interface FeedQuery {
  feed: FeedQuery_feed
}

export interface FeedQueryVariables {
  first?: number | null
  skip?: number | null
  orderBy?: LinkOrderByInput | null
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

// ====================================================
// GraphQL subscription operation: NewLinksSubscription
// ====================================================

export interface NewLinksSubscription_newLink_postedBy {
  __typename: 'User'
  id: string
  name: string
}

export interface NewLinksSubscription_newLink_votes_user {
  __typename: 'User'
  id: string
}

export interface NewLinksSubscription_newLink_votes {
  __typename: 'Vote'
  id: string
  user: NewLinksSubscription_newLink_votes_user
}

export interface NewLinksSubscription_newLink {
  __typename: 'Link'
  id: string
  url: string
  description: string
  createdAt: any
  postedBy: NewLinksSubscription_newLink_postedBy | null
  votes: NewLinksSubscription_newLink_votes[]
}

export interface NewLinksSubscription {
  newLink: NewLinksSubscription_newLink | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewVotesSubscription
// ====================================================

export interface NewVotesSubscription_newVote_link_postedBy {
  __typename: 'User'
  id: string
  name: string
}

export interface NewVotesSubscription_newVote_link_votes_user {
  __typename: 'User'
  id: string
}

export interface NewVotesSubscription_newVote_link_votes {
  __typename: 'Vote'
  id: string
  user: NewVotesSubscription_newVote_link_votes_user
}

export interface NewVotesSubscription_newVote_link {
  __typename: 'Link'
  id: string
  url: string
  description: string
  createdAt: any
  postedBy: NewVotesSubscription_newVote_link_postedBy | null
  votes: NewVotesSubscription_newVote_link_votes[]
}

export interface NewVotesSubscription_newVote_user {
  __typename: 'User'
  id: string
}

export interface NewVotesSubscription_newVote {
  __typename: 'Vote'
  id: string
  link: NewVotesSubscription_newVote_link
  user: NewVotesSubscription_newVote_user
}

export interface NewVotesSubscription {
  newVote: NewVotesSubscription_newVote | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LinkOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
}

//==============================================================
// END Enums and Input Objects
//==============================================================
