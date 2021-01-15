/// <reference types="cypress" />

describe('タイトルのテスト', () => {
  it('タイトルが「Create Next App」である', () => {
    cy.visit('/')
    cy.title().should('include', 'Create Next App')
  })
})

// TypeScript でエラーがでるので記述
export {}
