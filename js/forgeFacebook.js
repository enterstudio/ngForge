angular.module('ngForge').provider('$forgeFacebook', function() {
  'use strict';

  return {
    $get: ['$injector', '$forge', 'ngForgeUtils', function($injector, $forge, ngForgeUtils) {
      var $forgeFacebookProvider = this;

      var ngFacebook = {
          authorize: function(permissions, audience, success, error) {
            return success({
              access_token: 'dfs',
              access_expires: 'never',
              granted: true,
              denied: false
            });
          },
          hasAuthorized: function(permissions, audience, success, error) {
            return success({
              access_token: 'dfs',
              access_expires: 'never',
              granted: false,
              denied: false
            });
          },
          logout: function(success, error) {
            return success();
          },
          api: function(path, method, params, success, error) {
            return success(true);
          },
          ui: function(params, success, error) {
            return success(true);
          },
          installed: function(success, error) {
            return success(true);
          },
          getKeyHash: function(success, error) {
            return success($forgeFacebookProvider.facebookKeyHash);
          }
        };
        return ngForgeUtils.liftObject($forge.dummy ? ngFacebook : forge.facebook);
      }
    ],
    facebookKeyHash: 'NteSLOyHHHx12WUnrW0NEbwcY2Y'
  };
});
