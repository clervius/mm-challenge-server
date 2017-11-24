require('dotenv').config();

const app = require('express')(),
      config = require('./config/config');

require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/routes')(app);

app.listen(config.port);
console.log(`mm-server is up and running on ${config.port} at: ${config.where}`);