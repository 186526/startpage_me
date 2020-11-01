module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        htmlMinifierOptions:true,
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
