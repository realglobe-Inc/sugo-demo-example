/**
 * majika 設定ファイル
 */
'use strict'

const common = {
  beforeInstall: [
    'echo "registry = https://realglobe.artifactoryonline.com/realglobe/api/npm/npm-virtual" > .npmrc',
    'curl -u${NPM_USER}:${NPM_PASSWORD} "https://realglobe.artifactoryonline.com/realglobe/api/npm/auth" >> .npmrc'
  ],
  buildScript: [
    'npm install node-sass -g',
    './ci/build.js',
    'rm .npmrc'
  ]
}

module.exports = {
  dockerRepositoryPrefix: 'realglobe-docker-vertual.jfrog.io/',
  dockerBuildArgs: {
    additionalOptions: [ '--force-rm=true' ],
    beforeInstall: common.beforeInstall,
    buildScript: common.buildScript
  },
  travisCreateArgs: {},
  heroku: {
    additionalDependencies: {
      ['node-sass']: '*'
    },
    logo: 'http://realglobe-inc.github.io/sugo-demo-example/images/favicon.png',
    preDeploy: [
      'npm run prepublish',
      'curl -u`sugos-secrets get -r jfrog:deployer:username`:`sugos-secrets get -r jfrog:deployer:password` https://realglobe.artifactoryonline.com/realglobe/api/npm/auth > .npmrc',
      'echo "registry = https://realglobe.artifactoryonline.com/realglobe/api/npm/npm-virtual" >> .npmrc'
    ],
    postDeploy: [
      'rm -rf tmp',
      'rm -rf ui/js/lib/*.js', // Cleanup compiled
      'npm update',
      './ci/build.js'
    ]
  }
}
