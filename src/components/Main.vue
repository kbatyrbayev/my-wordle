<template>
  <div class="main">
    <v-snackbar
        v-model="$store.state.warningMessage"
        :top="true"
        :timeout="2000"
    >
      {{ text }}
    </v-snackbar>
    <my-dialog v-model:showDialog="$store.state.winDialog">
    </my-dialog>
    <my-grid/>
    <my-keyboard/>
  </div>
</template>

<script>
import MyGrid from "@/components/Grid";
import MyKeyboard from "@/components/Keyboard";
import MyDialog from "@/plugins/MyDialog";

export default {
  name: "my-main",
  components: {MyKeyboard, MyGrid, MyDialog},
  data() {
    return {
      text: `Бұндай сөз табылмады`,
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