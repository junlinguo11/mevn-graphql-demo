import Vue from 'vue';
import Router from 'vue-router';
import ViewEmployees from '@/components/ViewEmployees';
import ApolloExample from '@/components/ApolloExample';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewEmployees',
      component: ViewEmployees,
    },
    {
      path: '/gql',
      name: 'ApolloExample',
      component: ApolloExample,
    },
  ],
});
