const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    const url = new URL(req.url);

    switch (url.pathname) {
      case "/":
        return new Response("Home");

      case "/blog":
        return new Response("Blog");

      default:
        return new Response("404");
    }
  },
});

console.log(`Listening on port ${server.port}`);
