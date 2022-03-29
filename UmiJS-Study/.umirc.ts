import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    mode: 'stream',
    forceInitial: true,
  },
  dva: {},
  proxy: {
    '/api': {
      target: 'http://silksiteadmin.mez100.com.cn/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'zh-CN',
    title: true,
  },
  routes: [
    // { exact: true, path: '/', component: '@/pages/Layout/index' },
    // { exact: true, path: '/', redirect: '/home' },
    {
      path: '/',
      component: '@/pages/layout/index',
      title: 'Home',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/home', component: '@/pages/Home/index' },
      ]
    },
  ],
  fastRefresh: {},
});
