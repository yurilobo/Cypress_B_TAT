describe("Tickets",()=>{
    beforeEach(()=>cy.visit("https://bit.ly/2XSuwCW"));

    it.only("fills all the text input fields", ()=>{
        const firstName = "Yuri";
        const lastName = "Test Cypress";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("teste1@gmail.com");
        cy.get("#requests").type("Vegetarin");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    })
    it("has 'TICKETBOX' header's heading" , () => {});
});