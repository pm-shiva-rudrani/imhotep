var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ShowsSchema   = new Schema({
	rank: String
});

module.exports = mongoose.model('Shows', ShowsSchema);

