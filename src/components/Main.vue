<template>
  <div class="main">
    <my-grid :currentLetter="currentLetter"/>
    <my-keyboard @emiLetter="getLetter"/>
  </div>
</template>

<script>
import MyGrid from "@/components/Grid";
import MyKeyboard from "@/components/Keyboard";
export default {
  name: "my-main",
  components: {MyKeyboard, MyGrid},
  data() {
    return {
      currentLetter: ''
    }
  },
  methods: {
    getLetter(letter) {
      this.currentLetter = letter;
    }
  }
}
</script>

<style scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}
</style>