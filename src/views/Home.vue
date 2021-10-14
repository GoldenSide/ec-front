<!---*
* @description   入口主文件
* @fileName Home.vue
* @author 叶金龙
* @date 2021/07/06 15:04:52
*--->
<template>
  <div class="main">
    <div class="leftSide">
      <vsidebar />
    </div>
    <div class="rightSide">
      <Gheader />
      <!-- <vtags /> -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Gheader from "../components/layout/header/header.vue";
import vsidebar from "../components/layout/sideBar/index.vue";
import vtags from "../components/layout/tags/tags.vue";
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "home",
  components: { Gheader, vsidebar, vtags },
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  .leftSide {
    flex-basis: 260px;
    flex-shrink: 0;
  }
  .rightSide {
    flex: 1;
  }
}
</style>
