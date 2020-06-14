const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/reporte2', (req, res) => {
    connection.query('SELECT * FROM ReporteIngresoUsuarios', (err, result) => {
      res.render('reportes/reporte2', {
        reporte2: result
      });
    });
  });

};
