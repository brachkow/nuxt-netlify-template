<template>
  <div>
    <h1>Nuxt + Nuxt Content + NetlifyCMS template</h1>
    <ul>
      <li v-for="(article, index) in content" :key="index">
        <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: undefined,
    };
  },
  methods: {
    async getContent() {
      return await this.$content('docs').fetch();
    },
  },
  async mounted() {
    this.content = await this.getContent();
  },
};
</script>
