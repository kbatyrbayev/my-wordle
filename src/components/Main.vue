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
      console.log(letter, 'getletter')
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
  align-items: center;
  padding: 40px;
}
</style>