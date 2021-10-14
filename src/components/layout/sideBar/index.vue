<!---*
* @description  侧边栏
* @fileName sideBar.vue
* @author 叶金龙
* @date 2021/07/06 16:48:47
*--->
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <!-- :background-color="'#f7f8fa'" -->
    <el-menu
      :show-timeout="200"
      :default-active="routerPath"
      :collapse="isCollapse"
      :unique-opened="true"
      :text-color="'#bfcbd9'"
      @open="handleOpen"
      @close="handleClose"
      :active-text-color="'#1890ff'"
      mode="vertical"
    >
      <sidebar-item
        v-for="(route, index) in routes"
        :key="route.path"
        :item="route"
        :base-index="index"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import sidebarItem from "./sidebarItem.vue";
export default defineComponent({
  name: "sideBar",
  components: {
    sidebarItem,
  },
  setup() {
    const currentroute = useRoute();
    const routes = useRouter().options.routes;
    const routerPath = currentroute.path;
    const isCollapse = computed(() => {
      return false;
    });
    const handleOpen = (key: string, keyPath: string) => {
      console.log("open", key, keyPath);
    };
    const handleClose = (key: string, keyPath: string) => {
      console.log("close", key, keyPath);
    };
    return {
      routes,
      routerPath,
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
});
</script>
<style lang="scss"></style>
