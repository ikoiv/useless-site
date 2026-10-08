import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

// Serve only these public files; repository documentation and source are not web routes.
const routes = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
]);
const port = Number(process.env.PORT || 4174);

createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  // A readiness endpoint can be used by Playwright's webServer configuration later.
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    return response.end();
  }
  if (pathname === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    return response.end(request.method === 'HEAD' ? undefined : JSON.stringify({ status: 'ok' }));
  }
  const asset = routes.get(pathname);
  if (!asset) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return response.end(request.method === 'HEAD' ? undefined : 'Not found');
  }
  try {
    // Resolve relative to the script so npm start works regardless of the caller's directory.
    const content = await readFile(new URL(asset[0], import.meta.url));
    response.writeHead(200, { 'Content-Type': asset[1] });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(request.method === 'HEAD' ? undefined : 'Could not load the page.');
  }
}).listen(port, '127.0.0.1', () => console.log(`Useless Site: http://127.0.0.1:${port}`));
