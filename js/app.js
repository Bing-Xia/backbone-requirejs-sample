require.config({
  baseUrl: '/js',
  paths: {
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore-min',
    'backbone': 'lib/backbone-min',
    'bootstrap': 'lib/bootstrap-min',
    'text': 'lib/text'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ["underscore", "jquery"],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ["jquery"],
      exports: 'Bootstrap'
    }
  },
  urlArgs: '_t=' + (new Date()).getTime()
});

require(
  ["jquery","underscore","backbone","bootstrap","router"],
  function($, _, B, Bootstrap, LFSRouter) {
    new LFSRouter();
    Backbone.history.start();
});

