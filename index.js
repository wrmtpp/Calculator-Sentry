const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://ab3e29f071c14f2ab65785e1755a5aea@sentry.io/1814052' });

Sentry.configureScope(function(scope) {
 scope.setTag("5835512115" , "Woramet Prompen");
 scope.setUser({
   email: "5835512115@phuket.psu.ac.th",
   username: 'Woramet Prompen'
 });
});

myUndefinedFunction();
