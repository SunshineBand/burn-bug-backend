const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true
  }
})

module.exports = mongoose.model('Project', projectSchema);