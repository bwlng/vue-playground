module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
    },
    // when using the entry-only string format,
    // template is inferred to be `public/form.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `form.html`.
    form: {
        entry: 'src/form.js',

        chunks: ['index', 'form'],
    },
    resources: {
        entry: 'src/resources.js',
        chunks: ['index', 'resources'],
    }
  },

  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  runtimeCompiler: true,
  productionSourceMap: true,
  parallel: true,
  css: {
    extract: true,
  }
}
