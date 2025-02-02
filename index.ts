// Set up Twilio
// Log Twilio messages
// Send hello world message

const handler = async (request: Request): Promise<Response> => {
  return new Response("Hello World");
}

Deno.serve({ port: 6601 }, handler);
console.log("sms-bot running. Access it at: http://localhost:6601/");
