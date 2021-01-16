<template>
    <Nuxt />
</template>

<script>
export default {
   head() {
    return {
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: "width=device-width, initial-scale=1.0" }
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>