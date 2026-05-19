export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // redirect pages.dev to ryan.eus
    if (url.hostname === 'ryan-eus.pages.dev') {
      url.hostname = 'ryan.eus';
      return Response.redirect(url.toString(), 301);
    }

    // forward webhook
    if (url.pathname === '/webhook/github') {
      const target = new Request('https://baa.ryan.eus/webhook/github', request);
      return fetch(target);
    }

    return env.ASSETS.fetch(request);
  }
}