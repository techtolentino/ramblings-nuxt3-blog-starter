<template>
  <footer class="app-footer">
    <div class="container">
      <img class="app-footer__logo" src="~/assets/icons/ramblings-logo.svg" />
      <strong>ramblings</strong>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global/vars";

.app-footer {
  padding: $spacing-07 0 $spacing-12;
  background-color: $gray;
  color: $black;

  .container {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 1rem;
    margin-right: $spacing-02;
  }
}
</style>
