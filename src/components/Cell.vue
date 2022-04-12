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
.cell.green {
  background: green;
  color: #fff;
}
.cell.grey {
  background: #94A3B8;
  color: #fff;
}
.cell.orange {
  background: #F59E0B;
  color: #fff;
}
</style>