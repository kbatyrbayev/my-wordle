<template>
  <header class="header">
    <svg @click="openSignupDialog" class="icon" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.833 13.3337L14.9997 10.0003L10.833 6.66699V9.16699H3.33301V10.8337H10.833V13.3337Z"
            fill="#1E54B7"></path>
      <path
          d="M16.6667 2.5H9.16667C8.2475 2.5 7.5 3.2475 7.5 4.16667V7.5H9.16667V4.16667H16.6667V15.8333H9.16667V12.5H7.5V15.8333C7.5 16.7525 8.2475 17.5 9.16667 17.5H16.6667C17.5858 17.5 18.3333 16.7525 18.3333 15.8333V4.16667C18.3333 3.2475 17.5858 2.5 16.6667 2.5Z"
          fill="#1E54B7"></path>
    </svg>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#1E54B7">
      <path fill="var(--color-tone-1)"
            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
    </svg>
  </header>
</template>

<script>
export default {
  name: "my-header",
  methods: {
    openSignupDialog() {
      this.$store.commit('activateSignupDialog', true)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  padding: 5px 40px;
  display: flex;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    path {
      fill: rgb(30 84 183 / 70%);
      transition: fill 0.3s ease-in-out;
    }
  }

  span {
    margin-left: 5px;
  }
}
</style>