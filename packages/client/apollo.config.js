module.exports = {
  client: {
    addTypename: false,
    includes: ['./src/api/**/*.ts'],
    service: {
      name: 'hackernews',
      localSchemaFile: '../server/src/schema.graphql',
    },
    tagName: 'gql',
  },
}
