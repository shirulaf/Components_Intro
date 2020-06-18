import Vue from "vue";
import App from "./App.vue";

import TodoList from "./components/shared/ToDoList/todoList.vue";

Vue.component("TodoList", TodoList);

new Vue({
  el: "#app",
  // template: "<h1>The main.js template tag</h1>"
  render: h => h(App)
});
