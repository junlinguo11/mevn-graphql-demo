const { GraphQLList } = require('graphql');

const employeeType = require('./employeeTypeQL');
const Employee = require('./employeeSchema');

module.exports = {
    employees: {
      type: new GraphQLList(employeeType),
      resolve: () => {
        return Employee.getEmployees();
      },
    },
};
  