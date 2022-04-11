<template>
  <div class="cell" :data-id="id">{{ value }}</div>
</template>

<script>
export default {
  name: "my-cell",
  props: {
    id: {
      type: String
    },
    value: {
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
  font-weight: bold;
  user-select: none;
}
</style>