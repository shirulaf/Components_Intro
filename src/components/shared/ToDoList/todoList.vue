<template>
  <div :style="{backgroundColor: bgcolor}">
    <h1>{{ header }}</h1>
    <TodoListItems v-on:item-removed="removeItem" :tasks="initial_tasks"></TodoListItems>
    <TodoListActions v-on:new-item-added="addToList"></TodoListActions>
  </div>
</template>

<script>
import TodoListItems from "./todoListIetms";
import TodoListActions from "./todoListActions";

export default {
  components: {
    TodoListItems: TodoListItems,
    TodoListActions: TodoListActions
  },
  props: { initial_tasks: Array, bgcolor: String },
  data() {
    return {
      header: "My TODO List",
      tasks: this.initial_tasks
    };
  },
  methods: {
    addToList(new_item) {
      this.tasks.push(new_item);
    },
    removeItem(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
</style>