import { computed, nextTick, ref } from "vue";
import { NDropdown } from "naive-ui";

export const menuOptions = ref([
  {
    label: "杰·盖茨比",
    key: "jay gatsby",
  },
  {
    label: "黛西·布坎南",
    key: "daisy buchanan",
  },
  {
    type: "divider",
    key: "d1",
  },
  {
    label: "尼克·卡拉威",
    key: "nick carraway",
  },
  {
    label: "其他",
    key: "others1",
    children: [
      {
        label: "乔丹·贝克",
        key: "jordan baker",
      },
      {
        label: "汤姆·布坎南",
        key: "tom buchanan",
      },
      {
        label: "其他",
        key: "others2",
        children: [
          {
            label: "鸡肉",
            key: "chicken",
          },
          {
            label: "牛肉",
            key: "beef",
          },
        ],
      },
    ],
  },
]);
const menuShow = ref(false);
const point = ref({ x: 0, y: 0 });

export const dropdownApi = computed(
  (): InstanceType<typeof NDropdown>["$props"] => {
    return {
      options: menuOptions.value,
      show: menuShow.value,
      ...point.value,
      onClickoutside: () => (menuShow.value = false),
      placement: "bottom-start",
      trigger: "manual",
    };
  }
);

export function HandleContextMenu(e: MouseEvent) {
  e.preventDefault();
  menuShow.value = false;
  nextTick().then(() => {
    menuShow.value = true;
    point.value.x = e.clientX;
    point.value.y = e.clientY;
  });
}
