var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NetworksSchema   = new Schema({
	rank: String
});

module.exports = mongoose.model('Networks', NetworksSchema);

