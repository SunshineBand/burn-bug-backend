const Ticket = require('../../src/models/Ticket');

describe('Ticket Model', () => {
  const ticket = new Ticket();
  
  it('exits', () => {
    expect(ticket).toBeDefined();
  })
})