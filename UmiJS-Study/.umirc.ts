import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', component: '@/pages/index' },
    { exact: true, path: '/home', redirect: '/'},
    {
      path: '/layout',
      component: '@/pages/Layout/index',
      routes: [
        { path: '/layout/home', component: '@/pages/Home/index'}
      ]
    },
  ],
  fastRefresh: {},
});
