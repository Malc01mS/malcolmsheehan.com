export async function onRequest() {
  const response = await fetch('https://malcolmsheehan.substack.com/feed', {
    cf: { cacheTtl: 300, cacheEverything: true },
  });

  if (!response.ok) {
    return new Response('', { status: 502 });
  }

  const text = await response.text();
  return new Response(text, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
