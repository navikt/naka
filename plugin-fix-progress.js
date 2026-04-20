/**
 * Custom Docusaurus plugin to fix webpack ProgressPlugin compatibility
 */
module.exports = function () {
  return {
    name: 'fix-progress-plugin',
    configureWebpack(config) {
      const webpack = require('webpack');

      if (Array.isArray(config.plugins)) {
        config.plugins = config.plugins
          .map((plugin) => {
            const opts = plugin && plugin.options;
            const looksLikeLegacyProgress =
              opts &&
              typeof opts === 'object' &&
              ('reporters' in opts || 'reporter' in opts || 'color' in opts || 'name' in opts);

            if (looksLikeLegacyProgress) {
              // Replace legacy webpackbar-style options with webpack 5-valid options.
              return new webpack.ProgressPlugin({
                profile: false,
                percentBy: null,
              });
            }

            return plugin;
          })
          .filter(Boolean);
      }

      return {};
    },
  };
};
