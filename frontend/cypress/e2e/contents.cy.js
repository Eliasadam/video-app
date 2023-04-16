///<reference types="cypress"/>

describe('Youtube page', () => {
    beforeEach(() => {
      cy.visit('/youtube')
    })
  
    it('displays a message when there are no videos', () => {
      cy.intercept('GET', '/videos', { fixture: 'empty.json' })
      cy.contains('There isn\'t video to watch, please add a video')
    })
  })
  

  
