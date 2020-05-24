<template>
  <div class="hello">
      <input type="text" class="todo-input" placeholder="">
      Todo list goes here
  </div>
</template>

<script>
export default {
  name: "todo-list",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

</style>
