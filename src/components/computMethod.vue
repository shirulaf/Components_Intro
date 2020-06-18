<template>
  <div>
    Computed: {{val}}<br>
    Methods: {{getVal()}}<br>
    <input v-model="myVal" />change myVal<br>
    <input v-model="myVal2" />change myVal2
  </div>
</template>

<script>
export default {
  data() {
    return {
      myVal: 3,
      myVal2:4
    };
  },
  computed: {
    val() {
      console.log("Computed");
      return this.myVal;
    }
  },
  methods: {
    getVal() {
      console.log("Method");
      return this.myVal;
    }
  }
};
</script>

<style>
</style>