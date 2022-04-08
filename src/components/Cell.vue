<template>
  <div class="cell">{{ id }}</div>
</template>

<script>
export default {
  name: "my-cell",
  props: {
    id: {
      type: String
    }
  }
}
</script>

<style scoped>
.cell {
  padding: 10px;
  border: 1px solid teal;
  width: 50px;
  height: 50px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>