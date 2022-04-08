<template>
  <div class="grid">
    <div
        class="row"
        v-for="row in 6"
        :key="row"
    >
      <my-cell
          v-for="cell in 5"
          :key="cell"
          :id="row+''+cell"
          :data-id="row+''+cell"
      />
    </div>
  </div>
</template>

<script>
import MyCell from "@/components/Cell";

export default {
  name: "my-grid",
  components: {MyCell},
  props: {
    currentLetter: {
      type: String
    }
  },
  watch: {
    currentLetter(newValue) {
      console.log(newValue, 'in grid');
      this.$attrs['11'].set(newValue)
    }
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
}
</style>