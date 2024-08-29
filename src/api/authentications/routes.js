const routes = (handler) => [
  {
    method: 'POST',
    path: '/authentications',
    // handler: handler.postAuthenticationHandler,
    handler: (request, h) => handler.postAuthenticationHandler(request, h),
    options: {
      auth: 'open_music_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/authentications',
    // handler: handler.putAuthenticationHandler,
    handler: (request, h) => handler.putAuthenticationHandler(request, h),
    options: {
      auth: 'open_music_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/authentications',
    // handler: handler.deleteAuthenticationHandler,
    handler: (request, h) => handler.deleteAuthenticationHandler(request, h),
    options: {
      auth: 'open_music_jwt',
    },
  },
];

module.exports = routes;
