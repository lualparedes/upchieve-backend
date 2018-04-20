const studentQuestionCtrl = require('../../controllers/StudentQuestionCtrl');

module.exports = function(router) {

  router.post('/student-questions', function(req, res) {
    studentQuestionCtrl.create(req.body, function(err) {
      if (err) {
        res.json({err: err});
      } else {
        res.status(200).send('OK');
      }
    });
  });

  router.get('/student-questions', function(req, res) {
    console.log('get questions request');
    studentQuestionCtrl.retrieve(req.body, function(err, questions) {
      if (err) {
        console.log('route error');
        res.json({err: err});
      } else {
        console.log('route success');
        res.json({questions: 'q'});
      }
    });
  });
}