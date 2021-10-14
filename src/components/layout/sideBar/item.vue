<!-- <template> </template> -->
<script lang="ts">
import { ref, defineComponent, h } from "vue";
export default defineComponent({
  name: "menuItem",
  props: {
    meta: {
      type: Object,
    },
  },
  render(props: any, ctx: any) {
    let { icon, title } = props.meta;
    return h("div", { class: ["submenu_title"] }, [
      icon &&
        h("svg-icon", {
          props: {
            iconClass: icon,
          },
        }),
      title && h("span", { slot: "title" }, title),
    ]);
  },
});
</script>
