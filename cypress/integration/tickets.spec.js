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
    it("alerts on invalid email", ()=>{
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
    it("has 'TICKETBOX' header's heading" , () => {
        cy.get("header h1").should("contain", "TICKETBOX");

    });
    it("filland reset the form", ()=> {
        const firstName = "Yuri";
        const lastName = "Test Cypress";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#ticket-quantity").select("4");
        cy.get("#vip").check();
        cy.get("#publication").check();
        cy.get("#requests").type("IPA beer");

        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 4 VIP tickets.`
        )
        cy.get("#agree").click();
        cy.get("#signature").type(fullName);

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("be.disabled");
  
      cy.get("button[type='reset']").click();
  
      cy.get("@submitButton").should("be.disabled");
    });
    it.only("fills mandatory fields using support command", () => {
        const customer = {
          firstName: "Yuri",
          lastName: "Anderson",
          email: "yuri@example.com"
        };
    
        cy.fillMandatoryFields(customer);
    
        cy.get("button[type='submit']")
          .as("submitButton")
          .should("not.be.disabled");
    
        cy.get("#agree").uncheck();
    
        cy.get("@submitButton").should("be.disabled");
    });


});