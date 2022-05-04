<template>
  <my-header/>
  <game-page/>
  <my-dialog v-model:showDialog="$store.state.registrationDialog"  :dialogStyle="dialogStyle">
    <my-registration/>
  </my-dialog>
</template>

<script>

import GamePage from "@/pages/GamePage";
import MyHeader from "@/components/MyHeader";
import MyDialog from "@/plugins/MyDialog";
import MyRegistration from "@/components/MyRegistration";

export default {
  name: 'App',
  components: {MyHeader, GamePage, MyDialog, MyRegistration},
  data() {
    return {
      dialogStyle: {
        padding: 0,
        borderRadius: 0
      }
    }
  }
}
</script>


<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
