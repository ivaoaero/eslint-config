/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    {
      name: 'main',
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
  tagFormat: '${version}',
};
