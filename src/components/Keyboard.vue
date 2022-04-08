<template>
  <div class="keyboard">
    <div
        class="letters"
        v-for="(ltrs, i) in letters"
        :key="i"
    >
      <div
          class="letter"
          v-for="(ltr, j) in ltrs"
          :key="ltr"
          :class="{long: (i===2 || i===3) && j===9}"
          @click="selectLetter(ltr)"
      >
        {{ ltr }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-keyboard",
  data() {
    return {
      letters: [
        ['Ә', 'І', 'Ң', 'Ғ', 'Ү', 'Ұ', 'Қ', 'Ө', 'Һ','З', 'Х'],
        ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'Ж', 'Э'],
        ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', '⌫'],
        ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '↩']
      ]
    }
  },
  methods: {
    selectLetter(letter) {
      this.$emit('emiLetter', letter);
    }
  }
}
</script>

<style scoped>
.keyboard {
  display: flex;
  flex-direction: column;
  margin-top: auto;

}
.letters {
  display: flex;
}
.letter {
  padding: 10px;
  background: rgb(211 214 218 / 50%);
  margin: 2px;
  border-radius: 5px;
  color: #000;
  width: 45px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
}
.letter:hover {
  background: #D3D6DA;
}
.long {
  width: 94px;
  font-size: 30px;
}
</style>