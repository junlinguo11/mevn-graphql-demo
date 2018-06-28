const { gql } = require('apollo-server-express');
const Employee = require('./employeeSchema');

const typeDefs = gql`
    type Employee {
        _id: ID
        employee_id: String
        name: String
        dept: String
        position: String
    }
    type Query {
        employees: [Employee]
    }
    type Mutation {
        addEmployee(employee_id: String, name: String, dept: String, position: String): Employee
        deleteEmployee(_id: ID): Employee
    }
`;

const resolvers = {
    Query: {
        employees: () => {
            return Employee.getEmployees();
        }
    },
    Mutation: {
        addEmployee: (_, { employee_id, name, dept, position }) => {
            return Employee.addEmployee({ employee_id, name, dept, position });
        },
        deleteEmployee: (_, { _id }) => {
            return Employee.deleteEmployee(_id);
        }
    }
}

module.exports = { typeDefs, resolvers };