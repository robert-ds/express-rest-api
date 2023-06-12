const express = require('express');
const routerApi = require('./routes/index');
const cors = require('cors');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

/** Use middleware express.json */
app.use(express.json());

// const whiteList = [
//   'http://127.0.0.1:5500',
//   'http://127.0.0.1:8080',
//   'http://localhost:3000',
//   'https://express-rest-api-nu.vercel.app',
//   'https://express-rest-api-robert-ds.vercel.app'
// ];

// const options = {
//   origin: (origin, callback) => {
//     if(whiteList.includes(origin)){
//       callback(null, true);
//     }else {
//       callback( new Error('Not permite'));
//     }
//   }
// };

// app.use(cors(options));

app.use(cors());

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('listen in port ' + port);
});
