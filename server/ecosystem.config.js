// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'deep-nest-test',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'test',
      },
    },
    {
      name: 'deep-nest-prod',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
