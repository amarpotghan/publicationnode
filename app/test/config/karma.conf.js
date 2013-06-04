basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'lib/angular/angular.js',
  'lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'js/**/*.js',
   'js/app.js',
  'test/unit/**/*.js',
   'lib/angular/ui-bootstrap-min.js'

];
preprocessors = {
    '**/lib/*.js': 'coverage'
};
coverageReporter = {
    type : 'html',
    dir : 'coverage/'
};
autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
