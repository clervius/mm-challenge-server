module.exports = app => {
  const undefinedRoute = (req, res) => res.json({ undefined: 'This route is not defined in the server.' });

  app.use('/users', require('../api/users'));
  app.use('*', undefinedRoute);
}