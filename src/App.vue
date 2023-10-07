<script lang="ts" setup>
import ItemList from "./components/items/ItemList.vue";
import { ItemInterface } from "./models/items";
import { reactive } from "vue";

const items: ItemInterface[] = reactive([
  {
    id: 1,
    name: "Item 1",
    selected: false,
  },
  {
    id: 2,
    name: "Item 2",
    selected: true,
  },
  {
    id: 3,
    name: "Item 3",
    selected: false,
  },
]);

const onSelectItem = (id: number) => {
  const item = items.find((i) => i.id === id);
  if (!item) {
    console.warn(`Item with id ${id} not found`);
    return;
  }
  item.selected = !item.selected;
};
</script>

<template>
  <div class="home">
    <ItemList :items="items" @selectItem="onSelectItem" />
  </div>
</template>
