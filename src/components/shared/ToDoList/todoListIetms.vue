<template>
  <ol>
    <span v-for="(task, index) in tasks" :key="index">
      <li style="color:blue" v-on:click="$emit('item-removed',index)">{{ task }}</li>
    </span>
    <br />* Click to remove
  </ol>
</template>

<script>
export default {
  props: { tasks: { type: Array, required: true } },
  data() {
    return {};
  }
};
</script>

<style>
</style>