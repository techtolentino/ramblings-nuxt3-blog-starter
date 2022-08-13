<template>
  <div>
    <main class="home">
      <div class="container">
        <div class="home__hero">
          <h1>ramblings</h1>
          <h3 class="home__hero__subtitle">a collection of stories, thoughts, ideas, prayers, rants, reflections, blurbs, quotes, notes, pieces, guides, hopes, fears, & insights, all built w/ vue, the nuxt content module, and some basic scss.</h3>
        </div>
        <section class="home__post-list">
          <Card 
            v-for="post of content" :key="post._path" class="home__post-list__item"
            :title="post.title" 
            :description="post.description"
            :date="post.date"
            :link="post._path"
          />
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
  useHead({
    title: 'ramblings x randy tolentino',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
  })

  const content = await queryContent('posts').sort({date: -1}).find()
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/vars";

.home {
  color: $black;
  padding: $spacing-10 0;

  &__hero {
    padding-bottom: $spacing-12;

    &__subtitle {
      margin-top: 0;
      color: $dark-gray;
      max-width: $col-md;
    }
  }

  &__post-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: $spacing-08;
    max-width: $col-lg;
    padding-bottom: $spacing-10;
  }
}
</style>
