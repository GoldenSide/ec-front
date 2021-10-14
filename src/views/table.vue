<!---*
* @description  系统首页
* @fileName Dashboard.vue
* @author 叶金龙
* @date 2021/07/06 16:05:40
*--->
<template>
  <div class="sysIndex-container">
    <tableComponent :column="column" :tableData="dataList" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "chart",
  components: {},
  setup() {
    let column = ref([
      {
        label: "名称",
        prop: "name",
        render: ({ h, row }) => {
          return h(
            "div",
            {
              style: {
                color: "red",
              },
            },
            "我是个表单"
          );
        },
      },
      {
        label: "名称",
        prop: "name",
      },
      {
        label: "名称",
        prop: "name",
      },
      {
        label: "名称",
        prop: "name",
      },
    ]);
    let dataList = ref([
      {
        name: "yejinlog",
      },
      {
        name: "yejinlog",
      },
      {
        name: "yejinlog",
      },
    ]);
    return {
      column,
      dataList,
    };
  },
});
</script>

<style scoped></style>
