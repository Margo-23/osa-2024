export const path = {
  dist: 'dist',
  scss: {
    src: ['src/assets/scss/**.scss', '!src/assets/scss/_*.scss'],
    watch: 'src/assets/scss/**/*.scss',
    dist: 'dist/assets/css',
  },
  js: {
    src: 'src/assets/js/*.js',
    vendor: 'src/assets/js/vendor/*.js',
    watch: ['src/assets/js/**/*.js', '!src/assets/js/vendor/*.js'],
    dist: 'dist/assets/js',
  },
  img: {
    src: 'src/assets/img/**/*.{jpg,png,svg,gif}',
    dist: 'dist/assets/img',
  },
  svg: {
    src: 'src/assets/svg/*.svg',
    dist: 'dist/assets/svg',
  },
  pages: {
    src: 'src/pages/**/*.{html,hbs,handlebars}',
    watch:
      'src/{pages,layouts,partials,helpers,data}/**/*.{html,hbs,handlebars}',
    options: {
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/',
    },
  },
};
