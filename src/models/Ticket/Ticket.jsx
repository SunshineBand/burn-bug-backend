const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  title: {
    type: 'String',
    required: true
  },
  description: {
    type: 'String',
    required: false
  },
  issueType: {
    type: 'String',
    required: true
  },
  assignedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

module.exports = mongoose.model('Ticket', ticketSchema);