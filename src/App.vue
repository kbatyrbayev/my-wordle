<template>
  <my-header/>
  <game-page/>
</template>

<script>

import GamePage from "@/pages/GamePage";
import MyHeader from "@/components/MyHeader";

export default {
  name: 'App',
  components: {MyHeader, GamePage}
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
