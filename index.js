export default {
  async fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Loading</title>
        </head>
        <body>
          <h1>Loading Page</h1>
          <p>This is served by Cloudflare Worker.</p>
        </body>
      </html>
    `;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}
