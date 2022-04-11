<template>
  <div class="grid">
    <div
        class="row"
        v-for="(row, rowInd) in grid"
        :key="rowInd"
    >
      <my-cell
          v-for="(cell, cellInd) in row.cells"
          :key="rowInd+''+cellInd"
          :id="rowInd+''+cellInd"
          :value="cell"
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
    },

  },
  data() {
    return {
      grid: [
        {id: 1, cells: ['', '', '', '', '']},
        {id: 2, cells: ['', '', '', '', '']},
        {id: 3, cells: ['', '', '', '', '']},
        {id: 4, cells: ['', '', '', '', '']},
        {id: 5, cells: ['', '', '', '', '']},
        {id: 6, cells: ['', '', '', '', '']},
      ],
      currentRowId: 0,
      currentCellId: 0
    }
  },
  watch: {
    currentLetter(newValue) {
      console.log(newValue, 'in grid');

      if (newValue && this.currentRowId < this.grid.length) {
        this.grid[this.currentRowId].cells[this.currentCellId] = newValue;
        this.currentCellId += 1;

        if (this.currentCellId >= 5) {
          this.currentCellId = 0;
          this.currentRowId += 1;
        }
      }
      // this.$attrs['11'].set(newValue)
    }
  },
  mounted() {
    console.log(this.grid.length, 'this.grid.length')
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