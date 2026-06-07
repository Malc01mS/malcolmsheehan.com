export async function onRequest() {
  const response = await fetch('https://malcolmsheehan.substack.com/feed');
  const text = await response.text();
  return new Response(text, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
