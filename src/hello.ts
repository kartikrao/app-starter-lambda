export const hello = (event, context, callback) => {
  callback(null, {body : { message: 'Hello !!' }});
};