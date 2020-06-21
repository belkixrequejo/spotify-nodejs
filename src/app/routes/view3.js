const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/view3', (req, res) => {
    connection.query('SELECT count(idTarjeta) as Tarjetas, nombreUsuario FROM cantidad_tarjetas_registradas group by nombreUsuario order by Tarjetas', (err, result) => {
      res.render('views/view3', {
        view3: result
      });
    });
  });

};
