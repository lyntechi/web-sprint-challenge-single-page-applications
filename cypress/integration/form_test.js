

describe('Testing our form', ()=>{
    beforeEach(function(){
        //runs before each test in this block
        cy.visit(' http://localhost:3000/pizza')
    })
    it('Testing inputs and that form submits', () => {
        //Arrange - Get the element
     
        cy.get('#name')
        //Act - Mimic User Interaction
        .type('Lynda Santiago')
        //Assert - Test / Verify
        .should('have.value', 'Lynda Santiago')
      //Testing that you can select multiple toppings
      cy.get('#size').select('Small')
      cy.get('input[type="checkbox"]').check().should('be.checked')
    //   cy.get('textarea').type('Ready to submit form')
      cy.get('.btnOrder').click()
     

     
    })
  
})