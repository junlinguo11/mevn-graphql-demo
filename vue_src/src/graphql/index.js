import gql from 'graphql-tag';

export const getEmployees = gql`
    query {
        employees {
            _id
            employee_id
            name
            dept
            position
        }
    }
`;

export const addEmployee = gql`
    mutation ($employee_id: String!, $name: String!, $dept: String!, $position: String!) {
        addEmployee (employee_id: $employee_id, name: $name, dept: $dept, position: $position) {
            _id
            employee_id
            name
            dept
            position
        }
    }
`;

export const deleteEmployee = gql`
mutation ($_id: ID!) {
    deleteEmployee (_id: $_id) {
        _id
    }
}
`;