/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    podModulePrefix: 'client/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
       
      }
    },

    APP: {
    
    }
  };

  if (environment === 'development') {
    
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  
  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' https://beadando3-restapi-bojtoscsabi.c9users.io:49152 http://ajax.googleapis.com http://cdnjs.cloudflare.com http://maxcdn.bootstrapcdn.com",
    'font-src': "'self' 'unsafe-eval' https://fonts.gstatic.com https://maxcdn.bootstrapcdn.com",
    'connect-src': "'self' 'unsafe-eval' https://beadando3-restapi-bojtoscsabi.c9users.io",
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-eval' 'unsafe-inline' https://fonts.googleapis.com https://maxcdn.bootstrapcdn.com",
    'media-src': "'self'"
  };

  return ENV;
};
