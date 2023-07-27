var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cams', { front_door : "http://192.168.0.10:8080/zm/cgi-bin/nph-zms?&mode=jpeg&maxfps=5&monitor=3&rand=1690497156&connkey=380831",
                       door_bell: "http://192.168.0.10:8080/zm/cgi-bin/nph-zms?&mode=jpeg&maxfps=5&monitor=4&rand=1690497373&connkey=249008"

    });
});


module.exports = router;