
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['oJRSQFEsQEbmwjZ18rin4v'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  