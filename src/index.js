const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

/** Use middleware express.json */
app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('listen in port ' + port);
});
