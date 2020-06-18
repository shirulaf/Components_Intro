<template>
  <div>
    <h1>My New App</h1>
    <div class="grid-container">
      <div class="grid-item">
        <TodoList :initial_tasks="initial_tasks1" bgcolor="red"></TodoList>
        <TodoList bgcolor="yellow" :initial_tasks="initial_tasks2"></TodoList>
      </div>
      <div class="grid-item" style="  text-align: center">
        <img id="meme" src="./assets/meme.jpg" />
      </div>
    </div>
    <ComputdVdMethods></ComputdVdMethods>
  </div>
</template>

<script>
import ComputdVdMethods from "./components/computMethod";

export default {
  name: "app",
  components: { ComputdVdMethods: ComputdVdMethods },
  data() {
    return {
      initial_tasks1: [
        "Design Flow",
        "Choose Frameworks",
        "Write Requirments",
        "Write Code",
        "Write Tests"
      ],
      initial_tasks2: ["milk", "bread"]
    };
  }
};
</script>

<style>
#meme {
  height: 200px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 50px;
}
</style>
