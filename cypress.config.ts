import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
    specPattern: "cypress/e2e/**/*.cy.{ts,js}"
  }
});
