import { getGreeting } from '../support/app.po';

describe('markletr', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to markletr!');
  });
});
