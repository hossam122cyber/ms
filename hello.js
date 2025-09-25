// api/hello.js
export const config = {
  runtime: 'edge',
}

export default async function handler(request) {
  return new Response('Hello', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
