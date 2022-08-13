// needed to fix scroll to top issue
// https://github.com/nuxt/framework/discussions/1661#discussioncomment-3064168
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", async (a) => {
    window.scrollTo({ top: 0 });
  });
});