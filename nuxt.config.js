const fs = require('fs');
const path = require('path');
const { $content } = require('@nuxt/content');

export default {
  target: 'static',
  modules: ['@nuxt/content'],
  generate: {
    async routes() {
      const contentPaths = ['docs'];

      const files = [];
      contentPaths.forEach(async (path) => {
        const file = await $content(path).fetch();
        files.push(file);
      });

      const generated = files.map((file) => {
        return {
          route: file.path === '/index' ? '/' : file.path,
          payload: fs.readFileSync(`./content/${file.path}${file.extension}`, 'utf-8'),
        };
      });

      return generated;
    },
  },
};
