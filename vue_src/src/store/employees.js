import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import { getEmployees, addEmployee, deleteEmployee } from '../graphql';
import graphqlClient from '../graphql/graphqlClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
  },
  getters: {
    employeesCount: state => state.employees.length,
  },
  mutations: {
    [types.GET_EMPLOYEE](state, { employee }) {
      state.employees.push({
        _id: employee._id,
        employee_id: employee.employee_id,
        name: employee.name,
        dept: employee.dept,
        position: employee.position,
      });
    },
    [types.ADD_EMPLOYEE](state, { newEmployee }) {
      state.employees.push(newEmployee);
    },
    [types.DELETE_EMPLOYEE](state, { deletedEmployee }) {
      for (let i = 0; i < state.employees.length; i += 1) {
        if (state.employees[i]._id === deletedEmployee._id) {
          state.employees.splice(i, 1);
        }
      }
    },
  },
  actions: {
    getEmployees({ commit }) {
      graphqlClient.query({
        query: getEmployees,
      }).then(res => {
        res.data.employees.forEach(employee => {
          commit(types.GET_EMPLOYEE, { employee });
        });
      });
    },
    addEmployee({ commit }, { employee_id, name, dept, position }) {
      graphqlClient.mutate({
        mutation: addEmployee,
        variables: {
          employee_id,
          name,
          dept,
          position,
        }
      }).then(res => {
        commit(types.ADD_EMPLOYEE, { newEmployee: res.data.addEmployee })
      })
    },
    deleteEmployee({ commit }, _id) {
      graphqlClient.mutate({
        mutation: deleteEmployee,
        variables: {
          _id
        }
      }).then(res => {
        commit(types.DELETE_EMPLOYEE, { deletedEmployee: res.data.deleteEmployee })
      })
    },
  },
});
