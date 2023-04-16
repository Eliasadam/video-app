///<reference types="cypress"/>

describe('YoutubeForm', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('adds a video when the "Add video" button is clicked', () => {
      const videoTitle = 'Test video'
      const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  
      cy.intercept('POST', '/api/videos', (req) => {
        expect(req.body.title).to.equal(videoTitle)
        expect(req.body.url).to.equal(videoUrl)
        req.reply({ statusCode: 200 })
      }).as('addVideo')
  
    })
  })
  