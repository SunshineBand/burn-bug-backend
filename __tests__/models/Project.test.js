const Project = require('../../src/models/Project');

describe('Project Model', () => {
  const project = new Project({
    title: 'New Project'
  });

  it('exists', () => {
    expect(project).toBeTruthy();
  });

  it('has a title', () => {
    expect(project.title).toBeDefined();
  });
})