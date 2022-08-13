<template>
  <nav class="app-nav">
    <div class="container">
      <img class="app-nav__logo" src="~/assets/icons/ramblings-logo.svg" />
      <h1 class="app-nav__brand"><NuxtLink class="app-nav__brand__label" to="/"><strong>ramblings</strong></NuxtLink> x randy tolentino</h1>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/scss/global/vars";

.app-nav {
  background-color: $white;
  padding: $spacing-05 0;
  border-bottom: 1px solid $gray;
  position: sticky;
  top: 0;
  z-index: 1;

  .container {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 1rem;
    margin-right: $spacing-02;
  }

  &__brand {
    font-size: .875rem;
    font-weight: normal;
    margin: 0;
    &__label {
      margin: 0;
      color: $black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: $accent;
      }
    }
  }
}
</style>
