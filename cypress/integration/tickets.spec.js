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
    it("Select vip tickets type", ()=>{
        cy.get("#vip").check();
        cy.get("#general").check();
        cy.get("#vip").check();
        
    })
    it("Select checkboxs ", ()=>{
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#social-media").check();
        
    })
  
    it("has 'TICKETBOX' header's heading" , () => {
        cy.get("header h1").should("contain", "TICKETBOX");

    });
    it.only("alerts on invalid email", ()=>{
        cy.get("#email")
            .as("email")//alias apelido para #email
            .type("teste1-gmail.com");

        cy.get("#email.invalid")
            .as("email.invalid")
            .should("exist");

        cy.get("@email")//como cypress interprea o alias
            .clear()
            .type("teste1@gmail.com");

        cy.get("#email.invalid").should("not.exist");
    });
});