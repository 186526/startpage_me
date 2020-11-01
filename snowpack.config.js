module.exports = {
  mount: {
    html: '/',
    src: '/_dist_',
  },
  plugins: [
    // [
    //   '@snowpack/plugin-webpack',
    //   {
    //     htmlMinifierOptions:true,
    //     manifest:true,
    //   },
    // ],
    ["@snowpack/plugin-optimize", {
      target:["chrome49"],
      preloadModules:true,
    }]
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
    out:"public"
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
