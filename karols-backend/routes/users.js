var express = require('express');
// charge le module express
var router = express.Router();
// charge le module router d'express pour creer  des gestionnaires de route modulaires

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// creer une route/requete GET qui envoie le message "respond with a resource" sur la page d'accueil

module.exports = router;
