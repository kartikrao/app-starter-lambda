export const hola = (event, context, callback) => {
  callback(null, {body : { message: 'Hola !!' }});
};