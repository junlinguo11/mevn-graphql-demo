const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} = require ('graphql');

const employeeType = require('./employeeTypeQL');
const Employee = require('./employeeSchema');

module.exports = {
  addEmployee: {
    type:employeeType,
    args: {
      name:{
        name:'name',
        type:new GraphQLNonNull(GraphQLString)
      },
      dept:{
        name:'dept',
        type: new GraphQLNonNull(GraphQLString)
      },
      position:{
        name:'position',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (root, {name, dept, position}) => {
      return Employee.addEmployee({ name, dept, position });
    }
  },
  deleteEmployee: {
      type:employeeType,
      args: {
          _id: { type: GraphQLID },
      },
      resolve: (root, { _id }) => {
        return Employee.deleteEmployee(_id);
      }
  }
};
  