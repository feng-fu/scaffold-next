const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['> 0.1%', 'last 4 versions'],
    }),
  ],
};