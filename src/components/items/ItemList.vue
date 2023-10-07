<script lang="ts" setup>
import { ItemInterface } from "../../models/items";
import Item from "./Item.vue";

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
      <Item v-for="item in items" :key="item.id" :model="item" @selectItem="handleClick" />
    </ul>
  </div>
</template>

<style>
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
