<template>
  <div v-if="showDialog" class="dialog" @click="hideDialog">
    <div :style="dialogStyle" class="dialog-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialog',
  props: {
    showDialog: {
      type: Boolean,
      value: false
    },
    dialogStyle: {
      type: Object
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:showDialog', false)
    }
  }
}
</script>

<style scoped>
.dialog {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.dialog-content {
  margin: auto;
  padding: 20px;
  background: white;
  max-width: 300px;
  max-height: 300px;
  border-radius: 20px;
  text-align: center;
}
</style>