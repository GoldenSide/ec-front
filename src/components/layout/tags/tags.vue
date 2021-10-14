<template>
  <div>
      {{content}}
  </div>
</template>
<script lang="ts">
  import {ref,defineComponent} from "vue";
  export default defineComponent({
      name:"Tags",
      setup(){
         const content=ref('')
         content.value='我是标签的组件'
         return {content}          
      }
  })
</script>