
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'COSCUP Video Tagger 0.1' });
};