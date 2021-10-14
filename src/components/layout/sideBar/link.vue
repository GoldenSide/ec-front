<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "itemLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {},
});
</script>
