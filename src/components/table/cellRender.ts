import { h } from "vue";
const DynamicHeading = (props: any, ctx: any) => {
  // ctx.attrs, 不包含props的属性
  // ctx.slots  插槽
  let { row, column } = props
  return props.render({ h, row, column });
};
DynamicHeading.props = ["render", 'column', 'row'];
export default DynamicHeading;
