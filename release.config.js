/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    {
      name: 'main',
    },
    {
      name: 'tailwind-v3',
      range: '3.x',
      channel: 'tailwind-v3',
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
