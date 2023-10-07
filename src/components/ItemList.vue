<script lang="ts" setup>
import type { ItemInterface } from "../models/items";
defineProps<{ items: ItemInterface[] }>();

const emit = defineEmits<{
  (e: "selectItem", id: number): any;
}>();

const handleClick = (item: ItemInterface) => {
  emit("selectItem", item.id);
};
</script>

<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <li v-for="item in items" :key="item.id" @click="handleClick(item)">
        {{ item.name }} [{{ item.selected ? "selected" : "not selected" }}]
      </li>
    </ul>
  </div>
</template>
