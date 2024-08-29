const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    // handler: handler.postUserHandler,
    handler: (request, h) => handler.postUserHandler(request, h),
    options: {
      auth: 'open_music_jwt',
    },
  },
  
];

module.exports = routes;
