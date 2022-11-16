const { graphql } = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const taskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    weight: {type: GraphQLInt},
    description: {type: GraphQLString},
  })
});
