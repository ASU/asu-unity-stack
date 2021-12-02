/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
     getByTestId(id: string): Chainable<JQuery<E>>;
  }
}
