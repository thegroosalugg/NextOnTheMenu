// route handlers set up endpoint GET POST PUT DELETE functions
export function GET(request: Request) {
  console.log(request);
  return new Response('this is a get request');
}
// usually used to provide API endpoint to external APIs, rather than the Next app
