// Unregister existing service worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(
    function (registrations) {
      for (let registration of registrations) {
        registration.unregister()
          .then(function () {
            return self.clients.matchAll();
          })
          .then(function (clients) {
            clients.forEach(client => {
              if (client.url && "navigate" in client) {
                client.navigate(client.url);
              }
            });
          });
      }
    }
  );
}
