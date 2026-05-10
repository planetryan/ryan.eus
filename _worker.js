export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === 'ryan-eus.pages.dev') {
      url.hostname = 'ryan.eus';
      return Response.redirect(url.toString(), 301);
    }
    return fetch(request);
  }
}
