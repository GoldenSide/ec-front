import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@/components/layout/index.vue";
import content from "@/components/layout/content/index.vue";
const routes: RouteRecordRaw[] = [

  {
    path: "/",
    name: "home",
    component: layout,
    redirect: "/dashboard",
    meta: {
      title: '系统',
      icon: ""
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: {
          title: "首页",
          fullPath: '/dashboard'
        },
        component: () => import("@/views/Dashboard.vue"),
        // children:[{
        //   path:"chart",
        //   name:"chart",
        //   component: () => import("@/views/Dashboard.vue"),
        //   meta:{
        //     title:'图表展示',
        //     fullPath:'/dashboard/chart'
        //   }
        // }]
      },
    ],
  },
  // {
  //   path: "/table",
  //   name: 'tableList',
  //   component: layout,
  //   meta: {
  //     title: '表格',
  //     icon: ""
  //   },
  //   children: [
  //     {
  //       path: "tableBasic",
  //       name: "tableBasic",
  //       meta: {
  //         title: "基础表格",
  //         fullPath: '/table/tableBasic'
  //       },
  //       component: () => import("@/views/table/list.vue"),
  //     },
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory('/#'),
  routes,
});
export default router;
