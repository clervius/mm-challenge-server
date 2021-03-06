const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  db: process.env.DATABASE_CONNECTION,
  rootPath,
  port: process.env.PORT || 2013,
  where: 'dev-local',
  secret: process.env.SECRET_MESSAGE
}