<!---*
* @description   入口主文件
* @fileName Home.vue
* @author 叶金龙
* @date 2021/07/06 15:04:52
*--->
<template>
  <el-container>
    <el-aside width="200px">
      <div class="section-container">
        <div class="sidebar-container">
          <Gsidebar />
        </div></div
    ></el-aside>
    <el-container>
      <el-header>
        <div class="section-top">
          <Gheader /></div
      ></el-header>
      <el-main>
        <div class="section-content">
          <Gcontent /></div
      ></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Gheader from "./header/header.vue";
import Gsidebar from "./sideBar/index.vue";
import Gtags from "./tags/tags.vue";
import Gcontent from "./content/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "home",
  components: { Gheader, Gsidebar, Gtags, Gcontent },
});
</script>

<style scoped lang="scss"></style>
