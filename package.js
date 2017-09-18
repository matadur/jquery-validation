Package.describe({
  summary: "jQuery Validation by jzaefferer, repackaged for Meteor.",
  version: "1.14.1",
  name: "matadur:jquery-validation",
  git: "https://github.com/matadur/jquery-validation"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('jquery');
  api.addFiles([
    'lib/core.js',
    'lib/ajax.js',
    'lib/pattern.js'
  ],'client');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], ['client', 'server']);
  api.use('jquery', 'client');
  api.use('themeteorchef:jquery-validation');
  api.addFiles('themeteorchef:jquery-validation-tests.js');
});
