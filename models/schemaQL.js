const {
    GraphQLObjectType,
    GraphQLSchema,
} = require('graphql');
  
const {
    employeeQueries,
    employeeMutations,
} = require('./employeeQL.js');
   
let RootQuery = new GraphQLObjectType({
    name: 'Query',      //Return this type of object
    fields: () => ({
        employees: employeeQueries.employees,
    })
});

let RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addEmployee: employeeMutations.addEmployee,
        deleteEmployee: employeeMutations.deleteEmployee,
    })
});


let schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

module.exports = schema;
  