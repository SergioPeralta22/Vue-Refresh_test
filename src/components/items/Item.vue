<script lang="ts">
import { PropType, computed, defineComponent } from "vue";
import { ItemInterface } from "../../models/items";

export default defineComponent({
  name: "Item",
  emits: ["selectItem"],
  props: {
    testid: {
      default: "not-set",
    },
    model: {
      type: Object as PropType<ItemInterface>,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    const cssClass = computed(() => {
      let css = "item";
      if (props.model.selected) {
        css += " selected";
      }
      return css.trim();
    });
    const handleClick = () => {
      emit("selectItem", props.model.id);
    };
    return {
      cssClass,
      handleClick,
    };
  },
});
</script>

<template>
  <li :data-testid="testid" :class="cssClass" @click="handleClick">
    <div class="selected-indicator">*</div>
    <div class="name">{{ model.name }} [{{ model.selected }}]</div>
  </li>
</template>

<style>
li.item {
  padding: 5px;
  outline: solid 1px #eee;
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

li.item .name {
  margin-left: 6px;
}

li.item .selected-indicator {
  font-size: 2em;
  line-height: 0.5em;
  margin: 10px 8px 0 8px;
  color: lightgray;
}

li.item.selected .selected-indicator {
  color: skyblue;
}

li.item:hover {
  background-color: #eee;
}
</style>
