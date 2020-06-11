const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/reporte2', (req, res) => {
    connection.query('SELECT * FROM Reproducion_Cancion_Usuario', (err, result) => {
      res.render('reportes/reporte2', {
        reporte2: result
      });
    });
  });

};
