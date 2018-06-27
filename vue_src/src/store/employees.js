import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
  },
  getters: {
    employeesCount: state => state.employees.length,
  },
  mutations: {
    [types.GET_EMPLOYEE](state, { doc }) {
      const employee = doc.data();

      state.employees.push({
        id: doc.id,
        employee_id: employee.employee_id,
        name: employee.name,
        dept: employee.dept,
        position: employee.position,
      });
    },
    [types.ADD_EMPLOYEE](state, { newEmployee }) {
      state.employees.push(newEmployee);
    },
    [types.DELETE_EMPLOYEE](state, { doc }) {
      const deletedEmployee = doc.data();

      for (let i = 0; i < state.employees.length; i += 1) {
        if (state.employees[i].employee_id === deletedEmployee.employee_id) {
          state.employees.splice(i, 1);
        }
      }
    },
  },
  actions: {
    getEmployees({ commit }) {
    },
    addEmployee({ commit }, employee) {
      const newEmployee = employee;

      return db.collection('employees').add(newEmployee)
    },
    deleteEmployee({ commit }, id) {
    },
  },
});
