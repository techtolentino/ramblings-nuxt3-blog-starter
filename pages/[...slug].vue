<template>
  <main class="post">
    <ContentDoc v-slot="{ doc }">
      <div class="container">
        <div class="post__hero">
          <h1>{{ doc.title }}</h1>
          <h3 class="post__hero__subtitle">{{ doc.description }}</h3>
          <p class="post__time-stamp">
            {{ doc.date }}
          </p>
        </div>
        <div class="post__content">
          <ContentRenderer :value="doc" />
        </div>
        <div class="post__subfooter">
          <nuxt-link class="post__subfooter__link" to="/">&#8592; back home</nuxt-link>
        </div>
      </div>
    </ContentDoc>
  </main>
</template>

<script setup>
  useHead({
    titleTemplate: (title) => `ramblings x randy tolentino - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
  })
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/vars";

.post {
  padding: $spacing-10 0;

  &__hero {
    padding-bottom: $spacing-12;

    &__subtitle {
      margin-top: 0;
      color: $dark-gray;
      max-width: $col-md;
    }
  }

  &__time-stamp {
    font-size: .75rem;
    color: $primary;
  }

  &__subfooter {
    padding-top: $spacing-06;
    border-top: 1px solid $gray;
    &__link {
      color: $accent;
      text-decoration: none;
      &:hover {
        color: $primary;
      }
    }
  }

  &__content {
    padding-bottom: $spacing-13;
    max-width: $col-md;
  }

}
</style>