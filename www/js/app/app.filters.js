angular.module('buddytracker.app.filters', [])

.filter('cleanUrl',function() {
  return function(url) {
    if (url) {
      return url.replace('www.', '').replace('https://', '').replace('http://', '');
    }
  }
})

;
