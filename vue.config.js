const PrerenderSpaPlugin = require('prerender-spa-plugin')
const path = require('path')

const productionPlugins = [
  new PrerenderSpaPlugin({
    // Path to compiled app
    staticDir: path.join(__dirname, 'dist'),
    // List of endpoints you wish to prerender
    routes: ['/'],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      // We need to inject a value so we're able to
      // detect if the page is currently pre-rendered.
      inject: {},
      // Our view component is rendered after the API
      // request has fetched all the necessary data,
      // so we create a snapshot of the page after the
      // `data-view` attribute exists in the DOM.
      renderAfterElementExists: `[data-view]`,
    }),
  })
]

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  publicPath: "/",
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...productionPlugins);
    }
  }
};
