const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupTitle: {
    type: String,
    require: true,
  },
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
