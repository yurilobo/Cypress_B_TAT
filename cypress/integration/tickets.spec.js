describe("Tickets",()=>{
    beforeEach(()=>cy.visit("https://bit.ly/2XSuwCW"));

    it("fills all the text input fields", ()=>{
        const firstName = "Yuri";
        const lastName = "Test Cypress";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("teste1@gmail.com");
        cy.get("#requests").type("Vegetarin");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    })
    it("Select four tickets", ()=>{
        cy.get("#ticket-quantity").select("4");
    })
    it.only("Select vip tickets type", ()=>{
        cy.get("#vip").check();
        cy.get("#general").check();
        cy.get("#vip").check();
        
    })
    it("has 'TICKETBOX' header's heading" , () => {});
});