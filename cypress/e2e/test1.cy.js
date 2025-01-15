///<reference types="cypress"/>
describe('Homepage Tests', () => {
   beforeEach(()=>{
    cy.visit('https://www.conqt.com/');
   })
    it('All buttons are there', () => {
     
      
      cy.get(':nth-child(3) > .nav-link').should('exist')
      cy.get(':nth-child(2) > .nav-link').should('exist')
      cy.contains('Book Demo').should('exist')
    
    });
    it('should have a functional navigation menu', () => {
       
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get(':nth-child(2) > .nav-link').click()
        
      });
    
    
  
   
  });