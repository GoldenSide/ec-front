<!---*
* @description 表格组价
* @fileName tableComponent.vue
* @author 叶金龙
* @date 2021/09/10 11:31:11
*--->

<template>
  <div class="tableComponent">
    <el-table
      ref="dataTable"
      :data="tableData"
      v-loading="loading"
      :height="height"
      tooltip-effect="light"
      @select="selectOne"
      @select-all="selectAll"
      @sort-change="sortChange"
    >
      <el-table-column
        v-if="selectionShow"
        :selectable="isSelection"
        fixed="left"
        type="selection"
        width="55"
      >
      </el-table-column>

      <el-table-column
        v-for="(item, index) in column"
        :align="item.align || 'left'"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :fixed="item.fixed"
        :sortable="item.sortable"
        show-overflow-tooltip
      >
        <template #default="{row}">
          <cellRender
            :column="item"
            :row="row"
            :render="item.render"
            v-if="item.render"
          />
          <div v-else>{{ row[item.prop] }}</div>
        </template>
      </el-table-column>
    </el-table>
    <!-- <PaginationCom
      :limit.sync="pageSize"
      :page.sync="pageIndex"
      :total="pageTotal"
      @pagination="handlerPageChange"
    /> -->
  </div>
</template>

<script lang="ts">
import cellRender from "./cellRender";
import { defineComponent, reactive, toRefs, SetupContext, ref } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    selectionShow: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Array,
      default() {
        return [];
      },
    },
    height: {
      type: String,
      default: "calc(100vh - 361px)",
    },
    page: {
      type: Number,
      default: 1,
    },
    page_size: {
      type: Number,
      default: 15,
    },
    sort_field: {
      type: String,
      default: "",
    },
    sort_direction: {
      type: String,
      default: "",
    },
    total: {
      type: Number,
      default: 0,
    },
    pageAct: {
      type: Function,
    },
    loading: Boolean,
    tabelSelectOne: {
      type: Function,
    },
    tabelSelectAll: {
      type: Function,
    },
    isSelection: {
      type: Function,
      default() {
        return function() {
          return true;
        };
      },
    },
  },
  components: { cellRender },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({});
    let pageSize = ref(15);
    let pageIndex = ref(1);
    let pageTotal = ref(0);
    let handlerPageChange = () => {
      props.pageAct();
    };
    let selectOne = (selection, row) => {
      row.checked = !row.checked;
      props.tabelSelectOne(row);
    };
    let selectAll = (selection) => {
      props.tabelSelectAll();
      selection.forEach((v: any) => {
        selectOne(selection, v);
      });
    };
    let sortChange = () => {
      console.log("排序字段");
    };
    return {
      pageSize,
      pageIndex,
      pageTotal,
      selectOne,
      selectAll,
      handlerPageChange,
      sortChange,
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang="scss"></style>
