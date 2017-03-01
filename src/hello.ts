export const handle = (event: any, context: any, callback: any) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type' : 'text/plain'
    },
    body: 'Hello !!'
  });
};