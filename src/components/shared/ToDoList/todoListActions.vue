<template>
  <div>
    <input v-model="new_item" v-bind:placeholder="placeholder" />
    <button v-on:click="newItemAdded">Add</button>
    <button v-on:click="newItemAdded">Add</button>
    <button v-on:click="newItemAdded">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      new_item: "",
      placeholder: "Add new task"
    };
  },
  methods: {
    newItemAdded() {
      this.$emit("new-item-added", this.new_item);
      this.new_item = "";
    }
  }
};
</script>

<style>
</style>