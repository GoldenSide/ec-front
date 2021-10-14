<!---*
* @description  系统首页
* @fileName Dashboard.vue
* @author 叶金龙
* @date 2021/07/06 16:05:40
*--->
<template>
  <div class="sysIndex-container">
    <div class="lableLine">代办事项</div>
    <div class="casePanel"></div>
    <div class="lableLine">数据概览</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "chart",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.sysIndex-container {
  .lableLine {
    font-size: 16px;
  }
}
</style>
