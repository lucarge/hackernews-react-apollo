<div align="center">
  <h2>Hackernews</h2>
  <strong>
    <span>A </span>
    <a href="https://news.ycombinator.com/">hackernews</a>
    <span> clone built on modern web tecnologies.</span>
  </strong>

---

</div>

### Purpose

The goal of this project is to experiment with some of the new tecnologies emerging in the web development space; in particular, it has the goal of proving the advantages/quirks/tools revolving around GraphQL.

The idea comes from the amazing [howtographql.com](https://www.howtographql.com), which provides useful tutorials to learn and explore what GraphQL has to offer with various languages and frameworks.

### Project overview

This project is structured as a [yarn workspace](https://yarnpkg.com/lang/en/docs/workspaces/) with two packages: a client and a server. They're both written in [TypeScript](https://www.typescriptlang.org/). [Prettier](https://prettier.io/) is configured at the workspace level to keep the code formatting consistent between packages, and a precommit hook enforces the styles rules to be honored.

The client is built on top of [React](https://reactjs.org/), [React Router](https://reacttraining.com/react-router/) and [Apollo](https://www.apollographql.com/).

The server is build on top of [Prisma](https://www.prisma.io/).

### Getting started

Since this is a yarn workspace, yarn and a recent version of node are required.

I personally used `yarn@1.13.0` and `node@10.15.3` during development.

The workspace provides three apis that will be executed on both packages for convenience:

1. `dev:start`: start both the server and the client in development mode
1. `build`: build both the server and the client for production
1. `start`: start the production build of the server, and a static server to serve the production build of the client

Each of this apis are also available inside each package. It's possible to interact with a single workspace by targetting it specifically.

Example:

`yarn workspace @hack/server dev:start` starts only the server in development mode.

### Utilities

Each workspace provide also some utilities, which are package specific.

```bash
yarn workspace @hack/client types:generate
```

It parses all the `gql` tagged queries inside `packages/client/src/api` and generates their respective TypeScript types inside `packages/client/src/types`. Each query is validated against the server graphql schema, from where the types information are coming from.

```bash
yarn workspace @hack/server prisma
```

It exposes the prisma cli, preventing the need to install it globally.
Among other things, it is useful to deploy the app (`prisma deploy`) and to create the TypeScript API client found in `packages/server/src/generated/prisma-client` (`prisma generate`).

---

### Deploying Prisma

Before being able to work on the project, you'll need to deploy the prisma project to [prisma.io](https://www.prisma.io).

`yarn workspace @hack/server prisma deploy` will provide the address of the remote prisma instance, that should be put inside `packages/server/.env` under the key `PRISMA_ENDPOINT`.

The development instance of prisma is free of charge.
