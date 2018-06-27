const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Employee',
    description: 'An employee',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        dept: {
            type: GraphQLString
        },
        position: {
            type: GraphQLString
        }
    })
});