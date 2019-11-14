const Ticket = require('../../src/models/Ticket');

describe("Ticket Model", () => {

  describe('attributes', () => {
    const ticket = new Ticket({
      title: "Fix Something",
      description: "Fix the thing that needs fixing",
      issueType: 'Bug'
    });
    
    it('exists', () => {
      expect(ticket).toBeDefined();
    });
  
    it('has title', () => {
      expect(ticket.title).toBeDefined();
    });
  
    it('has description', () => {
      expect(ticket.description).toBeDefined();
    });
  
    it('has issueType', () => {
      expect(ticket.issueType).toBeDefined();
    });
  });
});