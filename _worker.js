export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'ryan-eus.pages.dev') {
      url.hostname = 'ryan.eus';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
}
