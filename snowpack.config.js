module.exports = {
  mount: {
    html: '/',
    src: '/_dist_',
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        htmlMinifierOptions: true,
        manifest: true,
        extendConfig: (config) => {
          config.module.rules.push({ test: /\\.webp$/, use: 'raw-loader' });
          return config;
        },
      },
    ],
    ["@snowpack/plugin-optimize", {
      target: ["chrome49"],
      preloadModules: true,
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
    out: "public"
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
