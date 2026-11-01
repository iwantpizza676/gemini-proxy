export const config = { 
  runtime: 'edge',
  regions: ['iad1'] 
};

export default async function handler(req) {
  const url = new URL(req.url);
  url.hostname = 'generativelanguage.googleapis.com';

  const headers = new Headers();
  const allowed = ['content-type', 'x-goog-api-key', 'x-goog-api-client', 'x-goog-user-project', 'authorization'];
  for (const h of allowed) {
    if (req.headers.has(h)) headers.set(h, req.headers.get(h));
  }

  const response = await fetch(url.toString(), {
    method: req.method,
    headers: headers,
    body: req.body,
  });

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
