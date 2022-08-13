<template>
  <div class="card">
    <p class="card__date">{{ date }}</p>
    <h4 class="card__title">
      <nuxt-link class="card__link" :to="link">
        {{ title }}
      </nuxt-link>
    </h4>
    <span>
      {{ description }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  date: String,
  link: String,
  description: String
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/vars";

.card {
  padding-bottom: $spacing-10;

  &__date {
    margin-bottom: 0;
    font-size: .75rem;
    color: $primary;
  }

  &__title {
    margin-top: 0;
  }

  &__link {
    color: $accent;
    text-decoration: none;
    &:hover {
      color: $primary;
    }
  }
}
</style>