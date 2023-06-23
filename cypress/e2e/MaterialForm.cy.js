describe('Material Form', () => {
  it('should submit material form', () => {
    cy.visit('http://localhost:3000/');
    
    cy.get('#material-name').type('Material 1');
    cy.get('#material-quantity').type('10');
    cy.get('button[type="submit"]').click();

    // Agrega aquí más aserciones según tus necesidades
  });
});