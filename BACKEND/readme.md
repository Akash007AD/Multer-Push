Code is in working condition
The utilities are basically middlewares that we have used at different stages. A middleware is a middle man kind of stuff which will first check a certain condition beofre sednding the req to the backend server.We can use mutliple middlewares at a particular step . The backend server mainly accepts (err,req,res,next) these 4 params out of which err is for errors received, req is the req sent from frontend, res is the response to be send to the frontend and next will actually loop the whole process of passing through multiple middlewares until a res is received.it is not a key word but a flag.
API ERROR MODULE ::
we have used the error class of node js in the api error module of the utilities
changes were made

TO fix the error make a folder in C drive name tmp ---> Then make a folder inside it named my-uploads---->Then try to submit a file--->It will push the photo file there


Changed in stock.route.js  --> req.body --> req.file 
{
  fieldname: 'photo',
  originalname: '_6d0116a5-1bdc-4bb2-b5d5-cca38852cfa3.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: '/tmp/my-uploads',
  filename: '_6d0116a5-1bdc-4bb2-b5d5-cca38852cfa3.jpg',
  path: '\\tmp\\my-uploads\\_6d0116a5-1bdc-4bb2-b5d5-cca38852cfa3.jpg',
  size: 121932
}

In such a way it will display the photo details in terminal