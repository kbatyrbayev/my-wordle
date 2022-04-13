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
          :value="cell.value"
          :class="cell.class"
      />
    </div>
  </div>
</template>

<script>
import MyCell from "@/components/Cell";
import {sozder} from "@/sozder";

export default {
  name: "my-grid",
  components: {MyCell},
  data() {
    return {
      grid: [
        {
          id: 1, cells: [
            {id: 1, value: '', class: ''},
            {id: 2, value: '', class: ''},
            {id: 3, value: '', class: ''},
            {id: 4, value: '', class: ''},
            {id: 5, value: '', class: ''},
          ]
        },
        {
          id: 2, cells: [{id: 1, value: '', class: ''},
            {id: 2, value: '', class: ''},
            {id: 3, value: '', class: ''},
            {id: 4, value: '', class: ''},
            {id: 5, value: '', class: ''},]
        },
        {
          id: 3, cells: [{id: 1, value: '', class: ''},
            {id: 2, value: '', class: ''},
            {id: 3, value: '', class: ''},
            {id: 4, value: '', class: ''},
            {id: 5, value: '', class: ''},]
        },
        {
          id: 4, cells: [{id: 1, value: '', class: ''},
            {id: 2, value: '', class: ''},
            {id: 3, value: '', class: ''},
            {id: 4, value: '', class: ''},
            {id: 5, value: '', class: ''},]
        },
        {
          id: 5, cells: [{id: 1, value: '', class: ''},
            {id: 2, value: '', class: ''},
            {id: 3, value: '', class: ''},
            {id: 4, value: '', class: ''},
            {id: 5, value: '', class: ''},]
        },
        {
          id: 6, cells: [{id: 1, value: '', class: ''},
            {id: 2, value: '', class: ''},
            {id: 3, value: '', class: ''},
            {id: 4, value: '', class: ''},
            {id: 5, value: '', class: ''},]
        },
      ],
      currentRowId: 0,
      currentCellId: 0,
      solution: 'айлық',
    }
  },
  methods: {
    changeGrid() {
      const char = this.$store.state.currentLetter;
      if (!char) return;
      const cells = this.grid[this.currentRowId].cells;

      if (char === '↩') {
        if (this.currentCellId === 5) {
          const word = cells.map(m => m.value).join('').toLowerCase();
          const isWord = sozder.findIndex(f => f.w.toLowerCase() === word);
          console.log(isWord, 'isWord')
          if (isWord !== -1) {
            this.checkWord(cells);
            this.currentRowId++;
            this.currentCellId = 0;
          } else {
            console.log('else warning');
            this.$store.commit('activateWarningMessage')
          }
        }
      } else if (char === '⌫') {
        if (this.currentCellId > 0) {
          this.currentCellId--;
          cells[this.currentCellId].value = '';
        }
      } else { // all chars in alphabet
        if (cells.length > this.currentCellId) {
          cells[this.currentCellId].value = char;
          this.currentCellId++;
        }
      }
    },
    checkWord(cells) {
      cells.forEach((cell, i) => {
        const value = cell.value.toLowerCase();
        if (value === this.solution[i].toLowerCase()) {
          cell.class = 'green';
        } else {
          const index = this.solution.indexOf(value);
          if (index === -1) {
            cell.class = 'grey';
          } else {
            cell.class = 'orange';
          }
        }
      });
      const isWin = this.checkToWin(cells);
      if (isWin) {
        this.$store.commit('activateWinDialog')
      }
      console.log(isWin, 'isWin')
    },
    checkToWin(cells) {
      const len = cells.filter(f => f.class === 'green').length;
      if (len === 5) return true;
      return false;
    }
  },
  mounted() {
    console.log(sozder)
    console.log(this.grid.length, 'this.grid.length')
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'changeLetter') {
        this.changeGrid();
      }

    })
    const word = 'көлік';
    console.log(word, this.solution)

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