Package.describe({
  name: 'rcy:chromajs',
  summary: 'library for all kinds of color manipulations',
  version: '1.1.1',
  git: "https://github.com/rcy/meteor-chromajs"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles('lib/module-before.js', 'client');
  api.addFiles('lib/chroma.js', 'client');
  api.addFiles('lib/module-after.js', 'client');

  api.export('chroma', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rcy:chromajs');
  api.addFiles('chroma-tests.js', 'client');
});
