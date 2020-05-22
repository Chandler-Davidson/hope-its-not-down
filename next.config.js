const withEsLint = require('next-eslint');

module.exports = withEsLint({
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
});
