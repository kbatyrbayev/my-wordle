<template>
  <my-main/>
</template>

<script>
import MyMain from "@/components/Main";

export default {
  name: 'App',
  components: {
    MyMain,
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
</style>
